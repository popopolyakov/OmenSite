<template lang="pug">
  .container
    navigation
    .page
      links
</template>

<script>
import links from '~/components/links.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
export default {
  mixins: [trans],
  components: {
    navigation, links
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
