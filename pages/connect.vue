<template lang="pug">
  .container
    navigation
    .page
      links
</template>

<script>
import links from '~/components/links.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
export default {
  mixins: [trans],
  components: {
    navigation, links
  }
}
</script>

<style lang="sass">

.container

</style>
