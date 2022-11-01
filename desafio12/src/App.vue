<template>
  <div class="container">
    <div class="row mt-5">
      <NumerosAleatorios :generarAleatorio="numAleatorio" @ganador="ganador"/>
    </div>
    <div class="row mt-5">
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-info btn-lg" type="button" @click="llamarGenerarAleatorio">JUGAR!</button>
      </div>
    </div>
    <div class="row mt-5 text-center" v-if="ganadorPremio">
      <h1><span class="badge bg-danger text-center">GANADOR!!!</span></h1>
    </div>
  </div>
</template>

<script>
import NumerosAleatorios from './components/NumerosAleatorios'
import { generarAleatorio } from './utils'

export default {
  name: 'App',
  components: {
    NumerosAleatorios
  },
  data: () => ({
    numAleatorio: 0,
    ganadorPremio: false
  }),
  methods:{
    llamarGenerarAleatorio(){
      this.ganadorPremio = false;
      this.numAleatorio = generarAleatorio(1, 100);
    },
    ganador(){
      this.ganadorPremio = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
