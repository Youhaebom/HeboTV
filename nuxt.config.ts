// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Hebo TV',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0' }
      ]
    }
  }
})
