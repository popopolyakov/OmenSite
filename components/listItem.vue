<template lang="pug">
    div    
        .items__container
            .items__container__block(v-for="item in items")
                .items__container__block__img
                    img(:src="require(`../static/img/history/${item.img}`)")
                .items__container__block__name
                    h6 {{item.name}}
                //-.items__container__block__desc
                    p {{`${item.print.split(' ').slice(0, 6).join(' ')}...`}} ОТКЛЮЧИЛ ПОТОМУ ЧТО НЕРОВНО ОТОБРАЖАЛОСЬ
                .items__container__block__openItem
                    .items__container__block__openItem__button
                        button(type="submit" @click="openItemClick(item.id)") Подробнее
</template>

<script>
export default {
    /* data() {
        return {
        items: this.$store.getters['products/getProducts'],
        curItem: 0
        }
    } */
    props: {
            items: {
                type: Array,
                required: true
            },
            curItem: {
                type: Number,
                default: 0
            }
        },
    methods: {
        openItemClick: function(id) {
            //console.log(this.$emit)
            this.$emit("openItem", id)
        }
    }
}
</script>

<style lang="sass" scoped>



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


.items__container__block__openItem
    justify-content: center
    align-content: center
.items__container__block__openItem__button
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
</style>