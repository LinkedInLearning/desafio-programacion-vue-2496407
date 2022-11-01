<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miCuandroDialogo">
    Abrir cuandro de diálogo
  </button>
  <VentanaDialogo target-id="miCuandroDialogo">
    <template v-slot:header>
      <h3>Cabecera del diálogo</h3>
    </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id dolor diam. Fusce sem augue, consequat quis
        sapien vitae, ultrices imperdiet eros. Vivamus posuere dui eget auctor vestibulum. Curabitur tincidunt eros
        turpis, sed convallis leo convallis venenatis.</p>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-primary btn-lg">Aceptar</button>
    </template>
  </VentanaDialogo>
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