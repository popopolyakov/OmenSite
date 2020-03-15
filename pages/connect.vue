<template lang="pug">
  .container
    navigation
    .page
      header
        omenlogo
        withus
      main
        .connect__main         
          form(@submit="sendForm")
            p
              input.connect__input(type="text" v-model="connect.name" placeholder="ВАШЕ ИМЯ")
            p
              input.connect__input(type="text" v-model="connect.link" placeholder="СВЯЗЬ С ВАМИ (ВК/ПОЧТА/INSTAGRAM)")
            p
              input.connect__input(type="text" v-model="connect.message" placeholder="ВАШЕ СООБЩЕНИЕ")
            p.connect__confirm
              input.connect__confirm__button(type="submit")
</template>

<script>
import links from '~/components/links.vue'
import omenlogo from '~/components/omenlogo.vue'
import withus from '~/components/withus.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import VkBot from 'node-vk-bot-api'
import config from 'dotenv'

/* function getRandomInt(min=190219210, max=241892716981698751679581) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
 */
export default {
  data() {
    return {connect: {
      name: null,
      lick: null,
      message: null,
      },
      test: process.env.TEST_ENV_VAR,
      token_vk: process.env.TOKEN
    }
  },
  mixins: [trans],
  components: {
    navigation, omenlogo, withus
  },
  methods: {
    sendForm(e) {
      let user=this.connect.name, link=this.connect.link, message=this.connect.message
      console.log(`${user}, ${link}, ${message}`)
      console.log(this.test)

      const bot = new VkBot(process.env.TOKEN)


      bot.sendMessage(79892605, `Новая связь на сайте:\n\n Имя: ${user},\n Связь: ${link},\n Сообщение: ${message}`)
      bot.startPolling(()=> {console.log('polling')})

      e.preventDefault()
/*        НЕ РАБОТАЕТ!!!!!!!!!!!!!!

const vk = new VK({
          token: '...',
          apiMode: 'parallel',
          pollingGroupId: ...,
          webhookConfirmation: ...,
          webhookSecret: '...',
          language: 'ru',

      })
      const { updates, api } = vk
      console.log(vk.updates)
      console.log(getRandomInt())

      updates.on('message', async (context, next) => {
        await next()
      })
      
      async function run() {
          await console.log('polling?')
          await vk.updates.startPolling()
          await console.log('pooling!')
          await api.messages.send({ "user_id": 79892605, 'message': 'приветхахахажопа', 'random_id': Number(getRandomInt()) });
          await console.log('пошел обратно')
          await e.preventDefault()
      }

      run().catch(console.error)*/
    }
  }
}
</script>

<style lang="sass">

main
  margin-top: 4vh
  margin-left: 10vw
  font-size: 20pt

.connect__input
  width: 100%
  height: 40px
  margin-top: 10px
  padding-left: 1%
  padding-top: -1px
  font-family: Open Sans Condensed
  font-size: 20pt
  border-radius: 5px
  border: rgba(0,0,0,.3) 1px solid


.connect__confirm__button
  background-color: whitesmoke
  margin-top: 2vh
  padding: 5px 10px 5px 10px
  border-radius: 15px
  border: rgba(0,0,0,.3) 2px solid
  font-family: Open Sans Condensed
  font-size: 20pt
  text-transform: uppercase
.connect__confirm
  text-align: right
</style>
