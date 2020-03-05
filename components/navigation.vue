<template lang="pug">
    .nav
      .nav__block(v-for="item in items" 
                  :class="[altCurrentPage()==item.src ? 'nav__link_current':'', item.hover ? 'nav__link_hover' : '', item.name]"
                  @click="nextpage= item.src"  
                  @mouseenter="item.hover = true" 
                  @mouseleave="item.hover = false")
        nuxt-link.nav__link(:to="`${item.src}`" )
          | {{item.print}}

</template>

<script>
/*
.nav__block.index(:class="[altCurrentPage==='main' ? 'nav__link_current':'', elem.hover ? 'nav__link_hover' : '']" v-on:click="nextpage= ''"  @mouseenter="elem.hover = true" @mouseleave="elem.hover = false")
        nuxt-link.nav__link(to="/")
          | Главная
      .nav__block.about(:class="[altCurrentPage==='about' ? 'nav__link_current':'', elem.hover ? 'nav__link_hover' : '']" v-on:click="nextpage= 'about'" @mouseenter="elem.hover = true" @mouseleave="elem.hover = false")
        nuxt-link.nav__link(to="/about")
          | О нас
      .nav__block.items(:class="[altCurrentPage==='items' ? 'nav__link_current':'', elem.hover ? 'nav__link_hover' : '']" v-on:click="nextpage= 'items'" @mouseenter="elem.hover = true" @mouseleave="elem.hover = false")
        nuxt-link.nav__link(to="/items")
          | Товары
      .nav__block.connect(:class="[altCurrentPage==='connect' ? 'nav__link_current':'', elem.hover ? 'nav__link_hover' : '']" v-on:click="nextpage= 'connect'" @mouseenter="elem.hover = true" @mouseleave="elem.hover = false")
        nuxt-link.nav__link(to="/connect") 
          | Связаться с нами
*/
export default {
  data() {
    return {items: [
      {src: '', name: 'index', hover: false, print: 'Главная'},
      {src: 'about', name: 'about', hover: false, print: 'О нас'},
      {src: 'items', name: 'items', hover: false, print: 'Товары'},
      {src: 'connect', name: 'connect', hover: false, print: 'Связаться с нами'},
    ]
  }},
  methods: {
    altCurrentPage() {
      let path=this.$route.path.split('/')
      return path[path.length-1].toLowerCase()
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
  border-left: 0.5px solid rgba(0,0,0,.1)
  border-left: .5px solid rgba(0,0,0,.1)
  transition: all .5s ease,flex-grow .3s ease-in
  background: #f7f7f7
  

.nav__link_current
  flex-grow: 1
  position: relative
  z-index: 5
  opacity: 0
  
.test

.nav__link
  text-align: center
  cursor: pointer
  pointer-events: auto
  -webkit-writing-mode: vertical-lr
  -ms-writing-mode: tb-lr
  writing-mode: vertical-lr
  transform: rotate(180deg)
  padding: 0 8px
  color: black
  height: 100%
  width: 100%
  font-family: Montserrat, bold
  text-transform: uppercase
  letter-spacing: 1px
  text-decoration: none
  word-spacing: 0px
  transition: all .5s ease,flex-grow .3s ease-in

.nav__link_hover
  background-color: #efefef


</style>