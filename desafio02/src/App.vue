<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary">Saltar</button>
        <button type="button" class="btn btn-secondary">Correr</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary">Aumentar velocidad</button>
        <button type="button" class="btn btn-secondary">Disminuir velocidad</button>
      </div>
    </div>
  </nav>

  <FiguraCuadrado :movimiento="tipoAnimacion" :velocidad="velocidad" />
</template>

<script setup>

import FiguraCuadrado from './components/FiguraCuadrado';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
