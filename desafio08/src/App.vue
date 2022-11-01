<template>
<div class="dropdown mb-5">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Canciones
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" @click="cargarArchivoCancion('./letras/la_pajara_pinta.json')">Paraja Pinta</a></li>
    <li><a class="dropdown-item" href="#" @click="cargarArchivoCancion('./letras/los_pollitos.json')">Los Pollitos</a></li>
  </ul>
</div>
  <LetraCancion :cancion="cancion"/>
</template>

<script setup>
import { ref } from 'vue'
import LetraCancion from './components/LetraCancion'

const cancion = ref(null);

const cargarArchivoCancion = (url) =>{
  fetch(url).
  then(respuesta => respuesta.json()).
  then(datos => cancion.value = datos);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
