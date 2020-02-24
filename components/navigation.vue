<template lang="pug">
    .nav
      .nav__block(:class="[altCurrentPage==='main' ? 'nav__link__current':'']" v-on:click="nextpage= ''")
        nuxt-link.nav__link(to="/")
          | Главная
      .nav__block(:class="[altCurrentPage==='about' ? 'nav__link__current':'']" v-on:click="nextpage= 'about'")
        nuxt-link.nav__link(to="/about")
          | О нас
      .nav__block(:class="[altCurrentPage==='items' ? 'nav__link__current':'']" v-on:click="nextpage= 'items'")
        nuxt-link.nav__link(to="/items")
          | Товары
      .nav__block(:class="[altCurrentPage==='connect' ? 'nav__link__current':'']" v-on:click="nextpage= 'connect'")
        nuxt-link.nav__link(to="/connect") 
          | Связаться с нами
</template>

<script>

export default {
  computed: {
    altCurrentPage() {
      const path = this.$route.path.split('/')
      if (path[path.length-1].toLowerCase() === '') {
        return 'main'
      }
      if (path[path.length-1].toLowerCase() === 'about') {
        return 'about'
      }
      if (path[path.length-1].toLowerCase() === 'items') {
        return 'items'
      }
      if (path[path.length-1].toLowerCase() === 'connect') {
        return 'connect'
      }
    }    
  }
}
</script>

<style lang="sass">
.nav
  position: fixed
  display: flex
  width: 100vw
  z-index: 10
  background: transparent

.nav__block
  position: relative
  z-index: 20
  cursor: pointer
  height: 100vh
  width: 40px
  min-width: 40px
  border-left: 1px solid rgba(0,0,0,.1)
  transition: 3s left ease-in
  background: #f7f7f7
  display: flex

.nav__link__current
  flex-grow: 1

.nav__link
  text-align: center
  cursor: pointer
  pointer-events: auto
  -webkit-writing-mode: vertical-lr
  -ms-writing-mode: tb-lr
  writing-mode: vertical-lr
  transform: rotate(180deg)
  padding: 0 8px
  color: #fff
  mix-blend-mode: difference
  height: 100%
  width: 100%
</style>