// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/storybook'],
  components: [
    {
      path: '~/app/components',
      pathPrefix: false,
    },
  ],

  css: ['~/app/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})