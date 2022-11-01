<template>
<div class="dropdown mb-5">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Canciones
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Paraja Pinta</a></li>
    <li><a class="dropdown-item" href="#">Los Pollitos</a></li>
  </ul>
</div>
  <LetraCancion/>
</template>

<script setup>
import LetraCancion from './components/LetraCancion'

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
