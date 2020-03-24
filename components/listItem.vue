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
                    button(type="submit" @click="openItemClick(item.id)") Подробнее {{curItem}}
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
</style>