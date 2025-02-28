<template>
  <article class="prose dark:prose-invert prose-h1:text-3xl">
    <ContentRenderer :value="about" />
  </article>
  <!-- <div>
    <button @click="enableCustomLayout">Update Layout</button>
  </div> -->
</template>

<script setup>
  const route = useRoute();
  const { data: about } = await useAsyncData(() => queryCollection('about').path(route.path).first());
  console.log(`Route Path: ${route.path}`);
  useSeoMeta({
    description: about._rawValue.description,
  });
  // definePageMeta({
  //   layout: "another",
  // });
  // function enableCustomLayout() {
  //   setPageLayout('another');
  // }
</script>
