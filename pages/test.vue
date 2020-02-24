
<template>
  <div id="demo">
    <button v-on:click="show = !show">
      Переключить
    </button>
    <transition name="fade">
      <p v-if="show">привет</p>
    </transition>
  </div>
</template>

<script>
export default {
  transition: 'bounce'
}
</script>

<style>
.bounce-enter-active {
    animation: bounce-in .8s;
}
.bounce-leave-active {
animation: bounce-out .5s;
}
@keyframes bounce-in {
0% { transform: scale(0) }
50% { transform: scale(1.5) }
100% { transform: scale(1) }
}
@keyframes bounce-out {
0% { transform: scale(1) }
50% { transform: scale(1.5) }
100% { transform: scale(0) }
}
</style>