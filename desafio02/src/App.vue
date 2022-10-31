<template>
  <div class="row mt-5 ml-5">
    <div class="col">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary" @click="saltar">Saltar</button>
        <button type="button" class="btn btn-secondary" @click="correr">Correr</button>
      </div>
    </div>
  </div>
  <div ref="figura" id="circulo"></div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const figura = ref(null)

const correr = () => {
      gsap.killTweensOf(figura.value);
      gsap.set(figura.value, {x: 0, y: window.innerHeight / 2});
      gsap.to(figura.value,
      {x: window.innerWidth, duration: 5, repeat: -1});
}

const saltar = () => {
      gsap.killTweensOf(figura.value);
      gsap.set(figura.value, {x: window.innerWidth / 2, y: window.innerHeight - 400});
      gsap.to(figura.value,
      {y: 0, duration: 2, repeat: -1, yoyo: true});
    }

onMounted(()=> correr());

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#circulo{
  width: 100px;
  height: 100px;
  background-color: aqua;
  border-radius: 100px;
  border: dotted 5px #2c3e50;
  position: absolute;
  top: 300px;
  left: 10px;
}
</style>
