<template lang="pug">
    .withus         
          a(href="http://vk.com/omenboyz")
            img.header__social__vk(:src="require(`../static/img/social/vk.png`)")
          a(href="http://vk.com/omenboyz")
            img.header__social__inst(:src="require(`../static/img/social/inst.png`)")
</template>

<style lang="sass">
.withus
  display: flex
  justify-content: flex-end
  align-items: center
  max-height: 100px
  a
    height: 100%
  .header__social__vk,.header__social__inst
    height: 100% 
    width: 100px
    border: 10px solid rgba(0,0,0,0.85)
    border-radius: 20px
    padding: 10px
  .header__social__inst
    margin-left: 10px
</style>