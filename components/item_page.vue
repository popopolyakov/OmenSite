<template lang="pug">
    .item_page
        
      
</template>

<script>

export default {
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
  border-left: 0.5px solid rgba(0,0,0,.1)
  border-left: .5px solid rgba(0,0,0,.1)
  transition: all .5s ease,flex-grow .3s ease-in
  background: #f7f7f7
  

.nav__link_current
  flex-grow: 1
  position: relative
  z-index: 5
  opacity: 0
  

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