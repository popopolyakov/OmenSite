<template lang="pug">
    .additem__page
        h1 Страница добавления айтемов
</template>
<script>
import adminTemplate from '~/layouts/adminTemplate.vue'

export default {
  middleware: ['adminscope'],
  layout: 'adminTemplate',
  vuetify: {
    
  },

}
</script>