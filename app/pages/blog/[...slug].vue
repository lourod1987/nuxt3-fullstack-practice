<template>
  <article v-if="data" class="prose dark:prose-invert">
    <ContentRenderer :value="data" />
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
    const { data } = await useAsyncData(() => queryCollection('blog').path(route.path).first());
    console.log(`Route Path: ${route.path}`);
</script>
