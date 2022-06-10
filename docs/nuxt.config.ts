import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  extends: ['./node_modules/@strapi-community/docus-theme'],
  github: {
    repo: 'nuxtlabs/docus-starter'
  }
})
