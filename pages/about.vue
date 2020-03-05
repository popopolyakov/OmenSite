<template lang="pug">
  .container
    navigation
    .page
      header
        omenlogo
        .withus
          a(href="http://vk.com/omenboyz")
            | Наш ВК    
      main
        .about__
          .about__img
            img(:src="require(`../static/img/sanya.png`)")
          .about__text
            br
            h1.about__h1
              | О НАС ЗАГОЛОВОК
            p.about__paragraph
              | Омен Бойз - московский стрит-фэшн брэнд.
              br
              br
              |  Концепт - самое главное в вещах, но я не забываю подобрать лучшую ткань и сделать лучшую посадку. Всё для твоего комфорта и собирания взглядов.
              br
              br
              | Я начал в 2017 году в Самаре с нуля, теперь делаю стиль в Москве. 
              br
              br
              | Растил брэнд как ребёнка, теперь мы растём и совершенствуемся вместе. 
              br

        h2.about__h2
          | История дропов
        VueSlickCarousel.history__slider(v-bind="carousel_settings")
          .history__item(v-for="item in items")
            span
              img.history__img(:src="require(`../static/img/history/${item.img}`)")
            span.history__desc
              h6
                | {{item.name}}
              time
                | {{item.date}}
              p
                | {{item.print}}
      typicalfooter


</template>

<script>
import omenlogo from '~/components/omenlogo.vue'
import typicalfooter from '~/components/typicalfooter.vue'
import navigation from '~/components/navigation.vue'
import trans from '~/mixins/trans'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {items: [
      {name: 'simple garments', print: 'Вдохновением для дизайна послужила уличная эстетика американских переулков времен 90х-00х годов.', img:'13_11_2017.png', date:'13.11.2017'},
      {name: 'Miami Vibez', print: 'Performing new capsule collection "Miami Vibez".', img:'11_06_2018.jpg', date: '11.06.2018'},
      {name: 'Give Me the Higher Education', print: 'Вся идея в том, чтобы люди обратили внимание на проблему получения высшего образования в России. Всем нам твердят, что без учебы в школе/университете нам не построить своё будущее, что в корне неверно', img:'7_11_2018.png', date: '07.11.2018'},
      {name: 'Omen Boyz In Da Hood', print: 'Эти вещи вдохновлены очень глубоким и эмоциональным фильмом о жизни в гетто - "Ребята с улицы". Если ты не смотрел этот фильм, то ты знаешь, чем займёшься сегодня вечером.', img:'12_04_2019_1.png', date:'12.04.2019'},
      {name: 'Omen Boyz Space Mission`19', print: 'Данная часть коллекции приурочена к сегодняшнему празднику - дню космонавтики. Вдохновились футуристичными логотипами космических фирм и нашивками с костюмов космонавтов.', img:'12_04_2019_2.png', date: '12.04.2019'},
      {name: 'Хорни Банни', print: 'На логотипе замечаем кролика, который вылезает из-за надписи в поисках удовольствий. Он - расхититель кроличьих сердец, однако интересует в крольчихах его лишь одно.', img:'12_04_2019_3.png', date: '12.04.2019'},
      {name: 'Невербалика', print: 'Невербалика - общение без слов посредством жестов. Однако жестикулировать можно не только руками. Это и есть посыл худи.', img:'19_08_2019.png', date:'19.08.2019'},
      {name: 'In My Kingdom Cold BLACK', print: 'Леденящие сюжеты последнего круга ада. Дизайн переносит зрителя в центр ада, самую холодную его часть. В этом месте всё устроено не так, как представляет большинство', img:'15_10_2019.png', date:'15.10.2019'},
      {name: 'In My Kingdom Cold RED', print: 'Здесь нет огня, котлов с лавой. Вездесущий лёд и мрак окутал предателей и отступников, а в самом центре покоится вмёрзший Люцифер. Чрезвычайно эстетично!', img:'15_10_2019_1.png', date: '15.10.2019'},
      {name: 'ALL EYEZ ON ME', print: 'нежнейший тёплый худи с изящным принтом, бархатной надписью, удобными резинками и оверсайз посадкой! С уверенностью заявляем: эта вещь - самая качественная и технологически совершенная из всех наших!', img:'16_12_2019.png', date: '16.12.2019'},
    ],
    carousel_settings: {
      "dots": false,
      "infinite": false,
      "speed": 200,
      "slidesToShow": 3,
      "slidesToScroll": 2,
      "initialSlide": 0,
    }
  }},
  mixins: [trans],
  components: {
    navigation, omenlogo, VueSlickCarousel, typicalfooter
  }
}
</script>

<style lang="sass">

.about__main


.about__page
  margin-left: 15%

main
  font-stretch: extra-expanded
  text-transform: uppercase
  font-family: Open Sans Condensed
.about__h1
  margin-left: 7%
.about__h1,.about__h2
  font-weight: normal
  text-transform: uppercase
  font-size: 30pt
  margin-bottom: 2%

.about__h2
  text-align: center
  margin-top: 2%

.about__paragraph
  font-size: 20pt
  letter-spacing: 1pt

.history__img
  width: 80%
  margin: auto

.history__item
  columns: 2 20em
  outline: none
  .history__desc
    width: 30%
.history__desc
  p, time
    margin-top: 1%
  p
    font-size: 18pt
  h6
    font-size: 20pt
.history__slider
  margin-top: 3%
</style>
