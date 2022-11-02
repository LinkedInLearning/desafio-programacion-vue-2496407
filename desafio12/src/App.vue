<template>
  <div class="container">
    <div class="row mt-5">
      <NumerosAleatorios/>
    </div>
    <div class="row mt-5">
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-info btn-lg" type="button">JUGAR!</button>
      </div>
    </div>
    <div class="row mt-5 text-center">
      <h1><span class="badge bg-danger text-center">GANADOR!!!</span></h1>
    </div>
  </div>
</template>

<script>
import NumerosAleatorios from './components/NumerosAleatorios'

export default {
  name: 'App',
  components: {
    NumerosAleatorios
  },
  data: () => ({}),
  methods:{}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
