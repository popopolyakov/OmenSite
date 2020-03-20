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
            v-flex(shrink='')
              v-tooltip(right='')
                template(v-slot:activator='{ on }')
                  v-btn(:href='source', icon='', large='', target='_blank', v-on='on')
                    v-icon(large='') mdi-code-tags
                span Source
              v-tooltip(right='')
                template(v-slot:activator='{ on }')
                  v-btn(icon='', large='', href='https://codepen.io/johnjleider/pen/bXNzZL', target='_blank', v-on='on')
                    v-icon(large='') mdi-codepen
                span Codepen
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