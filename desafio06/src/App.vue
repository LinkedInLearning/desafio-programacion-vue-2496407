<template>
  <nav class="navbar">
    <div class="container">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Buscar</span>
        <input type="text" class="form-control" v-model="busqueda">
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

const busqueda = ref('');
const busquedaDebounced = ref('');

const debounceBusqueda = _.debounce(() => busquedaDebounced.value = busqueda.value, 100)

watch(() => busqueda.value, debounceBusqueda, {immediate: true});

const listaFiltrada = computed(() => {
  return perfiles.filter(perfil => {
    
    const regex = new RegExp(busquedaDebounced.value, 'i');
    
    const email = perfil.email.search(regex) > -1;
    const usuario = perfil.usuario.search(regex) > -1;
    const nombre = perfil.nombre.search(regex) > -1;
    const compania = perfil.compania.search(regex) > -1;
    const direccion = perfil.direccion.search(regex) > -1;
    const acerca = perfil.acerca.search(regex) > -1;

    return email || usuario || nombre || compania || direccion || acerca;
  })
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
