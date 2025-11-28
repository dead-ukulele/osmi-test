export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/osmi-test/' : '/',
    buildAssetsDir: '/_nuxt/'
  },
  ssr: false
})