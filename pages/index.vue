<template lang="pug">
  .containerPage
    navigation
    
    div.index__page(v-if="!webgl" @click="startwebgl(); changeCurrentSlide('newindex')")
      omenlogo(v-if="!webgl")
      a.index__button.start(v-if="!webgl") Нажми на меня :)
    index3d(:webgl="webgl" :currentSlide.sync="currentSlide" @closeAnimation="closeAnimation" @changeCurrentSlide="changeCurrentSlide")
</template>

<script>
import omenlogo from '~/components/omenlogo.vue'
import navigation from '~/components/navigation.vue'
import index3d from '~/components/index3d.vue'
import trans from '~/mixins/trans'
import config from 'dotenv'
export default {
  data() {
    return {
      webgl: false,
      currentSlide: ''
    }
  },
  mixins: [trans],
  components: {
    navigation, omenlogo, index3d
  },
  //middleware: 'neverbalicaBackground', // НЕ РАБОТАЕТ ИЗ-ЗА SSR
  methods: {
    startwebgl() {     
      console.log('Hai')
      this.webgl=true
    },
    closeAnimation() {
      this.webgl=false
    },
    neverbalicaBackground: function() {
      console.log('ПАШЛО ДОБРО')
      const numBalls = 20;
      const balls = [];
      document.querySelector('html').style.overflow='hidden'
      for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
          ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.height = `${(Math.random() * 4)}em`;
          ball.style.width = `${ball.style.height.substring(0, ball.style.height.length - 2) * 0.7}em`; // 0.7 это отношение ширины к высоте
    
    
          balls.push(ball);
          document.body.append(ball);
      }

      // Keyframes
      balls.forEach((el, i, ra) => {
          let to = {
              x: Math.random() * (i % 2 === 0 ? -11 : 11),
              y: Math.random() * 12
          };

          let anim = el.animate(
              [
                  { transform: "translate(0, 0)" },
                  { transform: `translate(${to.x}rem, ${to.y}rem)` }
              ],
              {
                  duration: (Math.random() + 1) * 2000, // random duration
                  direction: "alternate",
                  fill: "both",
                  iterations: Infinity,
                  easing: "ease-in-out"
              }
          );
      });
    },

    changeCurrentSlide(ctx) {
      this.currentSlide=ctx
    }
  }
}
</script>

<style lang="sass">


.index__page
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  margin-right: 120px
  z-index: 100
  height: 100vh
  > p
    font-family: DrukTextWide
    padding-top: 1vh
  > .start
    z-index: 150

.ball 
  position: absolute
  opacity: 0.7
  background-size: contain
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3E%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='51.000000pt' height='71.000000pt' viewBox='0 0 51.000000 71.000000' preserveAspectRatio='xMidYMid meet'%3E%3Cg transform='translate(0.000000,71.000000) scale(0.100000,-0.100000)'%0Afill='%23000000' stroke='none'%3E%3Cpath d='M88 625 c3 -42 9 -59 25 -70 20 -14 20 -16 4 -52 -8 -21 -21 -69 -28%0A-106 -11 -60 -11 -72 4 -100 25 -48 28 -75 18 -157 -9 -82 -2 -110 30 -110 28%0A0 57 74 72 185 5 35 21 26 24 -12 8 -131 12 -155 27 -178 19 -29 29 -31 50 -9%0A12 12 16 36 16 100 0 46 4 84 9 84 9 0 21 -36 27 -79 6 -49 55 -66 71 -25 3 9%0A-3 64 -15 123 -11 58 -18 120 -15 137 3 21 -3 49 -18 80 -17 38 -22 68 -23%0A134 -1 49 -5 85 -11 85 -5 0 -10 -20 -10 -45 l0 -45 -115 3 c-63 2 -116 5%0A-117 5 -1 1 -3 24 -5 51 -6 69 -24 69 -20 1z m183 -79 c26 -2 51 -6 57 -10 18%0A-11 62 -159 58 -193 -4 -27 11 -114 30 -175 4 -13 0 -18 -15 -18 -14 0 -23 11%0A-32 37 -17 55 -49 116 -57 109 -6 -6 -4 -139 2 -199 2 -19 0 -25 -7 -18 -7 7%0A-16 7 -29 0 -16 -9 -18 -6 -18 18 1 15 -4 60 -10 98 -5 39 -10 78 -11 88 0 9%0A-7 17 -15 17 -8 0 -12 -4 -9 -10 3 -5 2 -10 -3 -10 -5 0 -15 -33 -23 -72 -15%0A-83 -16 -88 -18 -105 0 -7 -10 -13 -22 -13 -20 0 -21 4 -16 83 2 45 8 95 11%0A111 6 24 4 27 -6 18 -46 -38 -45 93 1 202 19 42 43 58 76 49 6 -1 31 -4 56 -7z%0Am144 -446 c-5 -8 -11 -8 -17 -2 -6 6 -7 16 -3 22 5 8 11 8 17 2 6 -6 7 -16 3%0A-22z m-255 -29 c0 -14 -18 -23 -30 -16 -6 4 -8 11 -5 16 8 12 35 12 35 0z%0Am150 -31 c0 -18 -3 -19 -20 -10 -11 6 -20 15 -20 20 0 6 9 10 20 10 13 0 20%0A-7 20 -20z'/%3E%3C/g%3E%3C/svg%3E%0A")
</style>
