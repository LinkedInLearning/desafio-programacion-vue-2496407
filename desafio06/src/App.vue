<template>
  <nav class="navbar">
  <div class="container">
    <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{elementosPerfil[indexSelecc].label}}
  </button>
  <ul class="dropdown-menu">
    <li
      v-for="(el, index) in elementosPerfil"
      v-bind:key="index"
      @click="seleccionarElemento(index)"
    >
      <a class="dropdown-item" href="#">{{el.label}}</a>
    </li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Orden: {{orden}}
  </button>
  <ul class="dropdown-menu">
    <li @click="seleccionarOrden('asc')"><a class="dropdown-item" href="#">Ascendente</a></li>
    <li @click="seleccionarOrden('desc')"><a class="dropdown-item" href="#">Descendente</a></li>
  </ul>
</div>

  </div>
  </nav>

  <PerfilUsuario
    v-for="perfil in listaOrdenada"
    :perfil="perfil"
    v-bind:key="perfil.id"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import PerfilUsuario from './components/PerfilUsuario.vue'
import perfiles from './assets/usuarios.json'

const elementosPerfil = [
    {key: 'email', label: 'Correo'},
    {key: 'usuario', label: 'Usuario'},
    {key: 'nombre', label: 'Nombre'},
    {key: 'compania', label: 'Compañia'},
    {key: 'f_nacimiento', label: 'Fecha de nacimiento'},
  ];

const indexSelecc = ref(0);
const orden = ref('asc');

const seleccionarElemento = (index)=>{
  indexSelecc.value = index;
}

const seleccionarOrden = (ordenSeleccionado)=>{
  orden.value = ordenSeleccionado;
}

const listaOrdenada = computed(() => {
  return perfiles.sort((a, b) => {
    if(orden.value === 'asc'){
      return ('' + a[elementosPerfil[indexSelecc.value].key]).localeCompare(b[elementosPerfil[indexSelecc.value].key]);
    }
    return ('' + b[elementosPerfil[indexSelecc.value].key]).localeCompare(a[elementosPerfil[indexSelecc.value].key]);
})
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
