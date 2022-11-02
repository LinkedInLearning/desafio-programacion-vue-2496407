<template>
  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-2">
        <ContadorTiempo></ContadorTiempo>
      </div>
    </div>

    <div class="row justify-content-around">
      <div class="col-2">
        <ContadorTiempo></ContadorTiempo>
      </div>
    </div>
  </div>

</template>

<script setup>
import ContadorTiempo from './components/ContadorTiempo.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
