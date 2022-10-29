<template>
  <PerfilUsuario
  v-for="perfil in perfiles"
  :perfil="perfil"
  v-bind:key="perfil.id"/>
</template>

<script setup>
import PerfilUsuario from './components/PerfilUsuario.vue'
import perfiles from './assets/usuarios.json'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
