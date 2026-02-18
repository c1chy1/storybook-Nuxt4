// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    srcDir: 'app',
  modules: ['@nuxt/image', '@nuxtjs/storybook'],
  components: [
    {
      path: '~/components/',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})