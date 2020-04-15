require('dotenv').config();
const express = require('express')
const consola = require('consola')
const mongoose= require('mongoose')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongouser = process.env.MONGO_USER, mongopass = process.env.MONGO_PASS

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Connect MongoDB
  
  console.log(mongouser,mongopass)
  try {
    await mongoose.connect(
      `mongodb+srv://${mongouser}:${mongopass}@omennuxt-bp3za.mongodb.net/test`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  } catch (e) { console.log(e) }
  

  app.get('/api/testcatalog', async (req, res) => {
    const products=[
      {
        name: 'Omen Boyz Space Mission`19', 
        print: 'Вдохновились футуристичными логотипами космических фирм и нашивками с костюмов космонавтов.', 
        img:'12_04_2019_2.png', 
        date: '12.04.2019',
        id: 1,
      },
      {
        name: 'Хорни Банни', 
        print: 'На логотипе кролик, который вылезает из-за надписи в поисках удовольствий. Он - расхититель кроличьих сердец, однако интересует в крольчихах его лишь одно.', 
        img:'12_04_2019_3.png', 
        date: '12.04.2019',
        id: 2
      },
      {
        name: `Невербалика`, 
        print: 'Невербалика - общение без слов посредством жестов. Однако жестикулировать можно не только руками. Это и есть посыл худи.', 
        img:'19_08_2019.png', 
        date:'19.08.2019',
        id: 3
      },
      {
        name: 'In My Kingdom Cold BLACK', 
        print: 'Леденящие сюжеты последнего круга ада. Дизайн переносит зрителя в центр ада, самую холодную его часть. В этом месте всё устроено не так, как представляет большинство', 
        img:'15_10_2019.png', 
        date:'15.10.2019',
        id: 4,
      },
      {
        name: 'In My Kingdom Cold RED', 
        print: 'Здесь нет огня, котлов с лавой. Вездесущий лёд и мрак окутал предателей и отступников, а в самом центре покоится вмёрзший Люцифер. Чрезвычайно эстетично!', 
        img:'15_10_2019_1.png', 
        date: '15.10.2019',
        id: 5
      },
      {
        name: 'ALL EYEZ ON ME', 
        print: 'нежнейший тёплый худи с изящным принтом, бархатной надписью, удобными резинками и оверсайз посадкой!', 
        img:'16_12_2019.png', 
        date: '16.12.2019',
        id: 6
      },
    ]
    res.send(products)
  })
  // Express GET endpoint
  const axios = require('axios')
  let movieIndex = 0
  app.get('/api/next-movie', async (req, res, next) => {
    const movieOptions = [
      'tt3896198',
      'tt0071253',
      'tt0109686',
      'tt2267998',
      'tt0109040',
      'tt0089218'
    ]
    const movie = await axios.get(
      `https://www.omdbapi.com/?i=${movieOptions[movieIndex]}&apikey=9733f1df`
    )
    movieIndex++
    if (movieIndex > movieOptions.length - 1) movieIndex = 0
    res.json(movie.data)
  })

  app.get('/api/getcatalog', async (req, res, next) => {
    //console.log('TEST')
    //let wears = await
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()