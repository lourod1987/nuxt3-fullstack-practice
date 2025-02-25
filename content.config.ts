import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    // docs: defineCollection({
    //   source: '**',
    //   type: 'page'
    // })
    // content: defineCollection({
    //   type: 'page',
    //   source: '**/*.md'
    // })
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
    })
  }
});
