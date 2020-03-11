<template lang="pug">
  .container
    navigation
    .index__page
      omenlogo
      | {{}}
</template>

<script>
import omenlogo from '~/components/omenlogo.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import config from 'dotenv'
export default {
  mixins: [trans],
  components: {
    navigation, omenlogo
  }
}
</script>

<style lang="sass">

.index__page
  display: flex
  justify-content: center
  align-items: center
  height: 100vh

</style>
