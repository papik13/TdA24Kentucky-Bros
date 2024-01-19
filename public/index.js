// nuxt.config.js
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  functions: {
    // Define your API functions
    create: {
      handler: require.resolve('./functions/create'),
    },
  },
});
