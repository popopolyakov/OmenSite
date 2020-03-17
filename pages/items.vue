<template lang="pug">
  .container
    navigation
    .page  
      header
        omenlogo
        withus
      main
        h1 Наши товары
        .items__container
          .items__container__block(v-for="item in items")
              .items__container__block__img
                img(:src="require(`../static/img/history/${item.img}`)")
              .items__container__block__name
                h1 {{item.name}}
              .items__container__block__desc
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
      items: [
        {
          name: 'Omen Boyz Space Mission`19', 
          print: 'Вдохновились футуристичными логотипами космических фирм и нашивками с костюмов космонавтов.', 
          img:'12_04_2019_2.png', 
          date: '12.04.2019',
          id: 1,
        },
        {
          name: 'Хорни Банни', 
          print: 'На логотипе кролик, который вылезает из-за надписи в поисках удовольствий. Он - расхититель кроличьих сердец, однако интересует в крольчихах его лишь одно.', 
          img:'12_04_2019_3.png', 
          date: '12.04.2019',
          id: 2
        },
        {
          name: 'Невербалика', 
          print: 'Невербалика - общение без слов посредством жестов. Однако жестикулировать можно не только руками. Это и есть посыл худи.', 
          img:'19_08_2019.png', 
          date:'19.08.2019',
          id: 3
        },
        {
          name: 'In My Kingdom Cold BLACK', 
          print: 'Леденящие сюжеты последнего круга ада. Дизайн переносит зрителя в центр ада, самую холодную его часть. В этом месте всё устроено не так, как представляет большинство', 
          img:'15_10_2019.png', 
          date:'15.10.2019',
          id: 4,
        },
        {
          name: 'In My Kingdom Cold RED', 
          print: 'Здесь нет огня, котлов с лавой. Вездесущий лёд и мрак окутал предателей и отступников, а в самом центре покоится вмёрзший Люцифер. Чрезвычайно эстетично!', 
          img:'15_10_2019_1.png', 
          date: '15.10.2019',
          id: 5
        },
        {
          name: 'ALL EYEZ ON ME', 
          print: 'нежнейший тёплый худи с изящным принтом, бархатной надписью, удобными резинками и оверсайз посадкой!', 
          img:'16_12_2019.png', 
          date: '16.12.2019',
          id: 6
        },
      ],
      curItem: false
    }
  }
}
</script>

<style lang="sass">

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