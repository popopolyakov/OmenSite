<template lang="pug">
  transition(name="modal" appear)
    .modalMask
      .curItem 
        .curItem__container
          .curItem__imgContainer
            img(:src="require(`../static/img/history/${items.img}`)")
          .curItem__descContainer
            h2 {{items.name}}
            .curItem__description
              p {{items.print}}
            .curItem__btnscontainer
              .curItem__btnscontainer__btns.curItem__btnscontainer__btns_cncl
                button(@click="closeItemDetails") Назад
              
              .curItem__btnscontainer__btns.curItem__btnscontainer__btns_cnfrm
                button(@click="curItem= 0") Связь с нами
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
    closeItemDetails() {
      this.$emit("closeItemDetails", 0)
    }
  },
}
</script>

<style lang="sass" scoped>

.curItem
  display: table-cell
  vertical-align: middle  
  > .curItem__container
    width: 60vw
    min-width: 80em
    margin: 0px auto
    padding: 20px 30px
    background-color: #fff
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
    font-family: Helvetica, Arial, sans-serif
    display: flex

.curItem__btnscontainer
  display: flex


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

.curItem__imgContainer
  height: 50em
  img
    height:100%
    width: auto

.curItem__btnscontainer__btns
  line-height: 30px
  height: 50px
  width: 200px
  cursor: pointer
  button
    padding: 10px
    text-transform: uppercase
    color: #000
    transition: all 0.5s
    position: relative 
    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 1
      background-color: rgba(255, 255, 255, 0.1)
      transition: all 0.3s

    &:hover::before
      opacity: 0
      transform: scale(0.5, 0.5)

    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 1
      opacity: 0
      transition: all 0.3s
      border: 1px solid rgba(0, 0, 0, 0.5)
      transform: scale(1.2, 1.2)

    &:hover::after
      opacity: 1
      transform: scale(1, 1)

.curItem__descContainer
  font-family: montserrat
  display: flex
  flex-direction: column
  margin-left: 1%
  > h2
    font-size: 60pt
    text-transform: uppercase
    font-weight: 300
    text-align: center
    font-stretch: condensed 
    word-break: break-all

.curItem__description
  flex-grow: 1
  font-size: 30pt
  text-align: center
  font-weight: 200

.curItem__btnscontainer__btns_cnfrm
  text-align: right
  flex-grow: 3
  
</style>