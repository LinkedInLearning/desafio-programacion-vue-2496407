<template>
  <nav class="navbar">
  <div class="container">
    <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#"></a>
    </li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Ascendente</a></li>
    <li><a class="dropdown-item" href="#">Descendente</a></li>
  </ul>
</div>

  </div>
  </nav>

  <PerfilUsuario
    v-for="perfil in perfiles"
    :perfil="perfil"
    v-bind:key="perfil.id"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import PerfilUsuario from './components/PerfilUsuario.vue'
import perfiles from './assets/usuarios.json'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>