<template lang="pug">
  transition(name="modal" appear)
    .modalMask
      .curItem 
        .curItem__container
          h2 {{items.name}}
          p Привет
          p {{items.print}}
          .curItem__btns
            .cur_Item_btns_cncl
              button(type="submit" @click="closeItmDetls") Назад
            .cur_Item_btns_cnfrm
              button(type="submit" @click="curItem= 0") Связь с нами
</template>

<script>
export default {
  props: {
    items: {
        type: Object,
        required: true
    },
    curItem: {
        type: Number,
        default: 0
    }
  },
  methods: {
    closeItmDetls() {
      this.$emit("closeItmDetls", 0)
    }
  }
}
</script>

<style lang="sass" scoped>

.curItem
  display: table-cell
  vertical-align: middle
  > .curItem__container
    width: 300px
    margin: 0px auto
    padding: 20px 30px
    background-color: #fff
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
    font-family: Helvetica, Arial, sans-serif

.modalMask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 110vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 1s ease
  margin-left: -150px

.modal-enter
  opacity: 0

.modal-enter-active
  opacity: 0

.modal-leave-active
  opacity: 0
</style>