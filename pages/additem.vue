<template lang="pug">
  v-app#inspire
    div
      v-data-table(:headers='headers', :items='products')
        template(v-slot:item.name='props')
          v-edit-dialog(:return-value.sync='props.item.name', @save='save', @cancel='cancel', @open='open', @close='close')
            | {{ props.item.name }}
            template(v-slot:input='')
              v-text-field(v-model='props.item.name', :rules='[max250chars]', label='Edit', single-line='', counter='')
        template(v-slot:item.print='props')
          v-edit-dialog(:return-value.sync='props.item.print', large='', persistent='', @save='save({changeString: props.item.print, editID: props.item.id, changeProperty: "print"})', @cancel='cancel', @open='open', @close='close')
            div {{ props.item.print }}
            template(v-slot:input='')
              .mt-4.title Update print
            template(v-slot:input='')
              v-text-field(v-model='props.item.print', :rules='[max250chars]', label='Edit', single-line='', counter='', autofocus='')
      v-snackbar(v-model='snack', :timeout='3000', :color='snackColor')
        | {{ snackText }}
        v-btn(text='', @click='snack = false') Close
</template>
<script>
import adminTemplate from '~/layouts/adminTemplate.vue'

export default {
  //middleware: ['adminscope'],
  layout: 'adminTemplate',
  data () {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max250chars: v => v.length <= 250 || 'Input too long!',
      pagination: {},
      headers: [
        {
          text: 'Название айтема',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Описание', value: 'print' },
        { text: 'Изображение', value: 'img' },
        { text: 'Дата релиза', value: 'date' },
        { text: 'ID', value: 'id' },
      ],
      products: JSON.parse(JSON.stringify(this.$store.getters['products/getProducts']))
    }
  },
  methods: {
    save (ctx) {
      console.log(ctx)
      this.$store.dispatch('products/setProperty', ctx)
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close () {
      console.log('Dialog closed')
    },
  }
}

</script>