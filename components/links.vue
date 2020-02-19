<template lang="pug">
    .links
        logo
        h1.title
            | omennuxt
        h2.subtitle
            | My funkadelic Nuxt.js project
        .links
            a.button--green(href='https://nuxtjs.org/', target='_blank')
                | Documentation
            a.button--grey(href='https://github.com/nuxt/nuxt.js', target='_blank')
                | GitHub Hai
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass">
.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
