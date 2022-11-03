<template>
  <div class="container mt-5">
    <div class="row">
      <div v-for="producto in productos" v-bind:key="producto.id" class="col-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">Precio: {{producto.precio}}</p>
            <a href="#" class="btn btn-primary" @click="agregarProducto(producto)">Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import productos from '../assets/productos.json'
import { useStore } from 'vuex'

const store = useStore();

const agregarProducto = (producto) => {
  store.dispatch('AgregarProducto', producto)
}
</script>
