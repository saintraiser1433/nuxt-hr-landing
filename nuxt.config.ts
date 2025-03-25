// https://nuxt.com/docs/api/configuration/nuxt-config
import 'dotenv/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg-sprite',
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classSuffix: '',
  },
  svgSprite: {
    // manipulate module options
  },
  imports: {
    dirs: ["constants/*.ts", "types/*.ts", "store/*.ts", "utils/*.ts", "composables/*.ts", "composables/*/*.ts"],
  },
  css: ['~/assets/css/main.css', 'sweetalert2/dist/sweetalert2.min.css', 'vue3-toastify/dist/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // gitSecretKey: process.env.GITHUB_SECRET_KEY,
    accessTokenSecret: process.env.NUXT_ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.NUXT_REFRESH_TOKEN_SECRET,
    public: {
      baseURL: process.env.BASE_API_URL,
      // baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      // gitClientID: process.env.GITHUB_CLIENT_ID,
      STORAGE_URL_UPLOADS: process.env.STORAGE_URL_JOB,
      STORAGE_URL_JOB: process.env.STORAGE_URL_JOB,
      STORAGE_URL_AVATAR: process.env.STORAGE_URL_AVATAR,
      STORAGE_URL_RESUME: process.env.STORAGE_URL_RESUME
    },
  },


})