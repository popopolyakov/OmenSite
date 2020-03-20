<template lang="pug">
  #app
    v-app#inspire
      v-navigation-drawer(v-model='drawer', app='', clipped='')
        v-list(dense='')
          v-list-item(@click='')
            v-list-item-action
              v-icon dashboard
            v-list-item-content
              v-list-item-title Dashboard
          v-list-item(@click='')
            v-list-item-action
              v-icon settings
            v-list-item-content
              v-list-item-title Settings
      v-app-bar(app='', clipped-left='')
        v-app-bar-nav-icon(@click.stop='drawer = !drawer')
          v-icon list
        v-toolbar-title Application
      v-content
        v-container(fluid='', fill-height='')
          v-layout(align-center='', justify-center='')
            nuxt
      v-footer(app='')
        span &copy; 2020 @popopolyakov

</template>
<script>
import Vuetify from 'vuetify' 
export default {
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: () => ({
    drawer: null,
  })
}
</script>