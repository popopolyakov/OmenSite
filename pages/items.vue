<template lang="pug">
  .containerPage
    navigation
    .page  
      header.typicalHeader
        omenlogo
        withus
      main
        h1.items__title Наши товары
        .items__container
          .items__container__block(v-for="item in items")
              .items__container__block__img
                img(:src="require(`../static/img/history/${item.img}`)")
              .items__container__block__name
                h6 {{item.name}}
              //-.items__container__block__desc
                p {{`${item.print.split(' ').slice(0, 6).join(' ')}...`}}
              .items__container__block__openItem
                button(type="submit" @click="curItem=item.id") Подробнее
        transition(v-if="curItem" name="modal" appear)
          .modalMask
            .curItem 
              .curItem__container
                h2 {{items[curItem-1].name}}
                p Привет
                p {{items[curItem-1].print}}
                .curItem__btns
                  .cur_Item_btns_cncl
                    button(type="submit" @click="curItem= false") Назад
                  .cur_Item_btns_cnfrm
                    button(type="submit" @click="curItem=item.id") Связь с нами
      typicalfooter

</template>

<script>
import links from '~/components/links.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import omenlogo from '~/components/omenlogo.vue'
import withus from '~/components/withus.vue'
import typicalfooter from '~/components/typicalfooter.vue'
export default {
  mixins: [trans],
  components: {
    navigation, omenlogo, withus, typicalfooter
  },
 data() {
    return {
      items: [...this.$store.state.products.products],
      curItem: false
    }
  }
}
</script>

<style lang="sass">

.items__title
  text-align: center
  font-family: Montserrat
  font-weight: 300
  font-size: 35pt

.items__container
  display: flex
  flex-flow: row wrap
  margin: 0 auto
  max-width: 80vw

.items__container__block 
  flex: 1 1 calc(33.33% - 30px)
  margin: 5px
  box-sizing: border-box
  min-width: 170px
  padding: 50px 20px
  text-align: center
  background:  #b5ced8

.items__container__block 
  display: grid
  width: 100%
  height: auto


.items__container__block__openItem
  display: flex
  align-items: flex-end
  justify-content: center 
  flex: 1

.items__container__block__img
  img
    width: 100%

.items__container__block__name
  h6
    font-family: Montserrat
    font-weight: 400
    font-size: 30pt
    text-transform: uppercase

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
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  display: table
  transition: opacity 1s ease

.modal-enter
  opacity: 0

.modal-enter-active
  opacity: 0

.modal-leave-active
  opacity: 0
</style>