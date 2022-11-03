<template>
  <div class="container">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button type="button" class="btn btn-secondary"><router-link to="/">Lista de productos</router-link></button>
        <button type="button" class="btn btn-secondary"><router-link to="/carrito">Carrito de compras {{store.getters.totalNumProductos}}</router-link></button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
    color: white !important;
    text-decoration: none !important;
}
</style>
