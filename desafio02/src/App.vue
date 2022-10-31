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

<script>

import gsap from 'gsap'

export default {
  name: 'SaltarCorrer',
  methods:{
    correr(){
      gsap.killTweensOf(this.$refs.figura);
      gsap.set(this.$refs.figura, {x: 0, y: window.innerHeight / 2});
      gsap.to(this.$refs.figura,
      {x: window.innerWidth, duration: 5, repeat: -1});
    },
    saltar(){
      gsap.killTweensOf(this.$refs.figura);
      gsap.set(this.$refs.figura, {x: window.innerWidth / 2, y: window.innerHeight - 400});
      gsap.to(this.$refs.figura,
      {y: 0, duration: 2, repeat: -1, yoyo: true});
    }
  },
  mounted(){
    this.saltar();
  },
}
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
