// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
   runtimeConfig: {
    public: {
      apiBaseLocal: 'https://api.mirrorengineering.com/api',
      apiBaseProd: 'https://api.mirrorengineering.com/api',
      imageUrlLocal: 'https://api.mirrorengineering.com',
      imageUrlProd: 'https://api.mirrorengineering.com'
    }
  },
    ssr: true,    
    nitro: {
    preset: 'static' // 👈 this is key for generating a dist folder
  },        // Disable server-side rendering
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  }
})
