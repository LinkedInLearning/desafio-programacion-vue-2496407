<template>
  <div class="row mt-5 ml-5">
    <div class="col">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary">Saltar</button>
        <button type="button" class="btn btn-secondary">Correr</button>
      </div>
    </div>
  </div>
  <div ref="figura" id="circulo"></div>
</template>

<script setup>

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
