<template>
  <nav class="navbar">
    <div class="container">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Buscar</span>
        <input type="text" class="form-control">
      </div>
    </div>
  </nav>

  <PerfilUsuario v-for="perfil in listaFiltrada" :perfil="perfil" v-bind:key="perfil.id" />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import _ from 'lodash'
import PerfilUsuario from './components/PerfilUsuario.vue'
import perfiles from './assets/usuarios.json'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
