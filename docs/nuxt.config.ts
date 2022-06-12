import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  extends: ['./node_modules/@strapi-community/docus-theme'],
  modules: ['@docus/github'],
  theme: {},
  github: {
    owner: 'strapi-community',
    repo: 'strapi-plugin-rest-cache',
    branch: 'main'
  },

  // app: {
  //   baseURL: '/strapi-plugin-rest-cache/',
  // },
})
