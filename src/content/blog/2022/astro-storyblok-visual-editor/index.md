---
date: 2022-12-15
title: Getting the Visual Editor to work for Storyblok + Astro
description: As I was getting my Astro-Storyblok project set up, I ran into a few bumps in the road with storyblok's visual editor.
---

There’s a relatively new integration between Astro and Storyblok. It’s an SDK that helps developers build a site in Astro and use Storyblok as the CMS. Check out the Github readme for astro-storyblok to get started.

As I was getting my own Astro-Storyblok project set up, I ran into a few bumps in the road. Those bumps had to do with getting storyblok's visual editor working.

## Trying out the example project - it works great!

There's an [example Astro+storyblok](https://stackblitz.com/edit/astro-sdk-demo?file=package.json) that has been created by the storyblok developer relations team. It's a Stackblitz. When I created an example Storyblok space and connected it to that Stackblitz, I saw the visual editor working great!

## Trying out my own project - it doesn't work!

However, when I created my own project just like the Stackblitz, put it on Github, deployed my project to Netlify, then connected it to Storyblok just like I did with the Stackblitz example, I ran into a problem.

The visual editor didn't work.

I would click "save", but the changes I had made did not show on the page. Everything in my project was the same as in the Stackblitz. The only real difference in my project setup was that my project was a Github repo.

The Stackblitz and my Github project were both built in Astro's SSG mode - they were built as static sites. But for the visual editor to work, **the Github project that Storyblok integrates with needs to be in Astro's SSR mode** - it needs to be a server-side rendered site.

So I changed my Github project to SSR mode, and that fixed the problem.

## Walkthrough

I'll walk you through the steps for how to get this starter project working, and hopefully this is helpful.

Here are the things I needed to do:

- Build a website with Astro that is deployed with Netlify (I'll just use the storyblok-astro example project for simplicity)
- Use the storyblok headless CMS to edit content on the website
- See the edits to my site update in the storyblok visual editor when I click "save"
- Publish changes so that the website builds with those new changes when I click "publish" in the storyblok editor

### Create a storyblok space

First I went into the storyblok dashboard and added a new space. I chose **New Space** and then clicked **Create Space**.

In the blok library, there were already four bloks created. These bloks correspond the the storyblok components that I need to create in my Astro project.

### Create the project

I looked at the Stackblitz project to guide me as I created a project in VS Code. I copied over the same files, since they correspond to the example space that Storyblok gives you when you create a new space in Storyblok. Here is my [Github repo](https://github.com/SandraRodgers/astro-storyblok-example) so you can see the files .

Notice that the files in the `storyblok folder` correspond to the bloks in my storyblok space:

```
src
--layouts
--pages
--storyblok
	--Feature.astro
	--Grid.astro
	--Page.astro
	--Teaser.astro
```

### Install dependencies

Since I copied the files from the Stackblitz, which means there is a `package.json` with the project dependencies, I could just type `npm install` to install all the needed dependences. But if I were building this from scratch, I would need the following:

The [@storyblok-astro](https://github.com/storyblok/storyblok-astro) dependency, which is the SDK to make Astro work with storyblok

```
npm install @storyblok/astro
```

The [@astrojs/netlify](https://github.com/withastro/astro/tree/main/packages/integrations/netlify/) dependency. This is the Netlify adapter that I must use with Astro to make my Astro project build in Netlify in SSR mode.

### Set up SSR

To set up SSR in my Astro project, I needed to add the line `output: "server"` to the `defineConfig` function in the `astro.config.mjs` file. This tells Astro to use server-side rendering.

```
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";

export default defineConfig({
  output: "server",
});
```

Also, since I'm using the Netlify adapter, I need to import the adapter package and add a line to the `astro.config.mjs` file:

```
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "server",
  adapter: netlify(),
});
```

## Configure project to work with storyblok

Integrating with storyblok requires a few steps. I already installed `@storyblok/astro` but I would need to set up the `astro.config.mjs` to include the storyblok integration.

I needed to add the `storyblok()`function inside the `intregrations`property of the config object. That `storyblok()` function takes an object with several options:

```
storyblok({
	accessToken: "<YOURACCESSTOKEN>",
	bridge: true,
	apiOptions: {
		region: "us",
	},
```

For the `accessToken` above, be sure to use the **preview token** if you want to use this with the visual editor in a preview branch/environment. If you are using this in production, you would use the **public token**. I'm using the preview token in my example project because I want it to work with the visual editor.

Then I'll add the components that are needed to connect to the storyblok bloks in the storyblok space (Astro knows to look for these components in the `src` folder).

```
components: {
	page: "storyblok/Page",
	feature: "storyblok/Feature",
	grid: "storyblok/Grid",
	teaser: "storyblok/Teaser",
},
```

Here's the entire config as looks now in the project:

```
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    storyblok({
      accessToken: "LSTMzttTLabrQLn9YBzQowzz", // preview token
      bridge: true,
      apiOptions: {
        region: "us",
      },
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
    }),
    tailwind(),
  ],
});
```

## Deploy site to Netlify

The project is now all ready in Github to be deployed. I went into Netlify and clicked on **Add new site**. Then I selected **Import an existing project** and chose Github for where to grab the project from.

I found my repo, selected it to deploy, and clicked **Deploy site**. Netlify then did its magic and built the site, giving me a url that I could click on to see my site.

## Make the storyblok visual editor work

Now I was able to go into storyblok and connect the site to the visual editor. In storyblok, I head into the settings for my space and click on **Visual Editor**.

I then added the newly deployed site's URL to the the Visual Editor settings in Storyblok where it says **Location (default environment)**.

Now, when I look at **Content** in my storyblok space, and then click on **Home**, I see my website in the visual editor.

And the best thing is, when I click on a blok in the right hand window, I can edit that block to have different text. When I click "save", I see the page in the visual editor refresh, and my change is there!

## Create webhook to publish storyblok edits to the site

The last thing I need to set up is the ablity to trigger a build with my new changes when I click the **publish** button in the storyblok editor. To do this, I needed a webhook from Netlify.

In Netlify, I went to **deploys / deploy settings / build hooks**. I then created a build hook, giving it the name **storyblok_publish**), and then copied the hook.

Then I went into the Storyblok space settings - **Webhooks** and added the webhook where it says **Story published & unpublished**.

Now when I clicked 'publish' in the Storyblok editor, it would trigger a deploy to my site with the changes.

Once the site builds, I see that it has the changes I made in storyblok!
