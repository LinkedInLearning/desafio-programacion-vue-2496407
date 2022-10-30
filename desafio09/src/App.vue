<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miCuandroDialogo">
    Abrir cuandro de diálogo
  </button>
  <VentanaDialogo target-id="miCuandroDialogo"/>
</template>

<script>
import VentanaDialogo from './components/VentanaDialogo.vue';
export default {
  name: 'App',
  components: { VentanaDialogo }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
