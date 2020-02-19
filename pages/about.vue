<template lang="pug">
  .container
    .menu
      .menu__block
        nuxt-link.menu__link(to="/")
          | Главная
      .menu__block
        nuxt-link.menu__link(active-class="menu__link_current" to="/about")
          | О нас
      .menu__block
        nuxt-link.menu__link(to="/items")
          | Товары
      .menu__block
        nuxt-link.menu__link(to="/connect") 
          | Связаться с нами
    .page
      links
</template>

<script>
import links from '~/components/links.vue'

export default {
  components: {
    links
  }
}
</script>

<style lang="sass">

.menu
  position: fixed
  display: flex
  width: 100vw
  z-index: 10
  background: transparent

.menu__block
  position: relative
  z-index: 20
  cursor: pointer
  height: 100vh
  width: 40px
  min-width: 40px
  border-left: 1px solid rgba(0,0,0,.1)
  transition: all .5s ease,flex-grow .3s ease-in
  background: #f7f7f7
  display: flex

.menu__link_current
  flex-grow: 1
  transition: all 0s ease

.current_page
  flex-grow: 1
  transition: all 0s ease;

.menu__link
  text-align: center;
  cursor: pointer;
  pointer-events: auto;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  padding: 0 8px;
  color: #fff;
  mix-blend-mode: difference;
  height: 100%;
  width: 100%;

.container

</style>
