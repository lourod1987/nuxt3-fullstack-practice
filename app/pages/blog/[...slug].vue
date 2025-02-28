<template>
  <article v-if="blog" class="prose dark:prose-invert">
    <ContentRenderer :value="blog" />
  </article>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="hover:bg-gray-200 dark:hover:bg-gray-600 py-1 text-gray-500">
        Go back home
      </NuxtLink>
    </div>
  </template>
</template>

<script setup>
  const route = useRoute();
  const { data: blog } = await useAsyncData(() => queryCollection('blog').path(route.path).first());
  console.log(`Route Path: ${route.path}`);

  useSeoMeta({
    title: blog._rawValue.title,
    description: blog._rawValue.description,
    ogTitle: blog._rawValue.meta.head.meta[4].content
  });
  console.log(`This is the data: ${JSON.stringify(blog)}`);
  console.log(`DATA TITLE: ${blog._rawValue.title}`);
</script>
