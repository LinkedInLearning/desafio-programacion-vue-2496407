<template>
  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-2">
        <RuedaGira :velocidad="velocidad" :direccion="direccion1"/>
      </div>
      <div class="col-2">
        <RuedaGira :velocidad="velocidad" :direccion="direccion2"/>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col text-end">
        <button type="button" class="btn btn-secondary btn-lg" @click="velocidad -= 0.3">Girar</button>
      </div>
      <div class="col text-start">
        <button type="button" class="btn btn-secondary btn-lg" @click="cambiarDireccion">Cambiar dirección</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import RuedaGira from './components/RuedaGira'

const velocidad = ref(8);

const direccion1 = ref('derecha');
const direccion2 = ref('izquierda');

const cambiarDireccion = () =>{
  const temp = direccion1.value;
  direccion1.value = direccion2.value;
  direccion2.value = temp;
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
