module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      ptmono: ["'PT Mono'", "monospace"],
      ptsans: ["'PT Sans'", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#FFF",
      gray: "#D9D9D9",
      one: "#EFB198",
      two: "#F5E090",
      three: "#9DFFC1",
      four: "#a3b5e3",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      gridTemplateRows: {
        // 9 row grid:
        9: "repeat(9, minmax(0, 1fr))",
      },
      animation: {
        fade: "fade 1s ease-in",
        "fade-delay-100": "fade 1s ease-in .1s",
        "fade-delay-200": "fade 1s ease-in .2s",
        "fade-delay-300": "fade 1s ease-in .3s",
        "fade-delay-400": "fade 1s ease-in .4s",
        "fade-delay-500": "fade 1s ease-in .5s",
        "fade-delay-600": "fade 1s ease-in .6s",
        "fade-delay-700": "fade 1s ease-in .7s",
        "fade-delay-800": "fade 1s ease-in .8s",
        "fade-delay-900": "fade 1s ease-in .9s",
        "fade-delay-1000": "fade 1s ease-in 1s",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: ["postcss-import", require("@tailwindcss/typography")],
};
