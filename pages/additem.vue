<template lang="pug">
  v-app#inspire
    div
      v-data-table(:headers='headers', :items='products')
        template(v-slot:item.name='props')
          v-edit-dialog(:return-value.sync='props.item.name', @save='save', @cancel='cancel', @open='open', @close='close')
            | {{ props.item.name }}
            template(v-slot:input='')
              v-text-field(v-model='props.item.name', :rules='[max25chars]', label='Edit', single-line='', counter='')
        template(v-slot:item.iron='props')
          v-edit-dialog(:return-value.sync='props.item.iron', large='', persistent='', @save='save', @cancel='cancel', @open='open', @close='close')
            div {{ props.item.iron }}
            template(v-slot:input='')
              .mt-4.title Update Iron
            template(v-slot:input='')
              v-text-field(v-model='props.item.iron', :rules='[max25chars]', label='Edit', single-line='', counter='', autofocus='')
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
      max25chars: v => v.length <= 25 || 'Input too long!',
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
      products: [...this.$store.state.products.products],
    }
  },
  methods: {
    save () {
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