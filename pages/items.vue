<template lang="pug">
  .containerPage
    .page  
      header.typicalHeader
        omenlogo
        withus
      main
        h1.items__title Наши товары
        listItem(:curItem="curItem" :items="items" @openItem="openItem")
        curItem(v-if="curItem" :curItem="curItem" :items="items[curItem-1]" @closeItemDetails="closeItemDetails" )
      typicalfooter
    navigation
</template>

<script>
import listItem from '~/components/listItem.vue'
import links from '~/components/links.vue'
import curItem from '~/components/curItem.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import omenlogo from '~/components/omenlogo.vue'
import withus from '~/components/withus.vue'
import typicalfooter from '~/components/typicalfooter.vue'
export default {
  mixins: [trans],
  components: {
    navigation, omenlogo, withus, typicalfooter, curItem,listItem
  },
 data() {
    return {
      items: this.$store.getters['products/getProducts'],
      curItem: 0
    }
  },
  //props: ['сurItem'],
  methods: {
    openItem(id) {
      this.curItem=id
    },
    closeItemDetails() {
      this.curItem=0
    }
  }
}
</script>

<style lang="sass" scoped>

.items__title
  text-align: center
  font-family: Montserrat
  font-weight: 300
  font-size: 35pt

</style>