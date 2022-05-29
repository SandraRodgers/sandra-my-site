<template>
  <div :class="`preview card-${index}`">
    <a :href="`blog/${slug}`">
      <h3 class="title">{{ frontmatter.title }}</h3>
      <div class="date">{{ frontmatter.date.slice(0, 10) }}</div>
      <div class="description">{{ frontmatter.description }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    index: String,
    frontmatter: Object,
    slug: String,
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped>
.preview {
  @apply p-8;
  @apply text-xl;
}

li {
  @apply my-4;
}

.card-0 {
  @apply border-one border-2 text-white rounded-sm;
  @apply col-span-3 xl:col-span-2;
  @apply row-span-2 sm:row-span-2 lg:row-span-2;
  @apply mb-6 lg:mb-12;

  .title {
    @apply font-biz text-white;
    @apply text-4xl !important;
  }
}

.card-2 {
  @apply border-2 border-one rounded-sm;
  @apply col-span-3 sm:col-span-1;
  @apply row-span-2 sm:row-span-4;
  @apply mb-6 lg:mb-12;
  @apply mr-0 sm:mr-4 lg:mr-0;
  @apply h-full sm:h-4/6;
}
.card-3 {
  @apply col-span-3 sm:col-span-1;
  @apply row-span-6 sm:row-span-6 lg:row-span-4;
  @apply border-2 border-one rounded-sm;
  @apply mb-6 lg:mb-12;
  @apply mt-6 sm:mt-0;
  @apply ml-0 sm:ml-4 lg:ml-0;
  @apply h-full sm:h-4/6;
}
.card-4 {
  @apply border-2 border-one rounded-sm;
  @apply col-span-3 sm:col-span-1;
  @apply row-span-4;
  @apply h-full sm:h-4/6;
  @apply hidden lg:block;
}

.date {
  @apply text-three;
  @apply mb-4;
}

.description {
  @apply font-biz;
  @apply text-base text-four;
}
</style>
