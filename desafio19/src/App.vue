<template>
  <div class="circulo" ref="circulo3"></div>
  <div class="circulo" ref="circulo2"></div>
  <div class="circulo" ref="circulo1"></div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import gsap from 'gsap'

const circulo1 = ref();
const circulo2 = ref();
const circulo3 = ref();
const escala = ref();

const generarAleatorio = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

const animar = () => {
  escala.value = generarAleatorio(0.5, 2);
  gsap.to(circulo1.value, {
    scale: escala.value, duration: 1, delay: 1, onComplete: () => {
      gsap.to(circulo1.value, { scale: 0, duration: 1, delay: 0.5, onComplete: animar });
    }
  });
}

onMounted(() => {
  animar();
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.circulo {
  transform-origin: center;
  width: 100px;
  height: 100px;
  border-radius: 300px;
  border: 2px dotted black;
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
