<template lang="pug">
  .container
    navigation
    .items__page
      omenlogo
      div.text
        | Страница в разработке
</template>

<script>
import links from '~/components/links.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import omenlogo from '~/components/omenlogo.vue'
export default {
  mixins: [trans],
  components: {
    navigation, omenlogo
  }
}
</script>

<style lang="sass">

.items__page
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  flex-direction: column
  .text
    font-family: Open Sans Condensed
    font-size: 25pt
</style>
