<template>
  <div class="container mt-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in listaProductos" v-bind:key="producto.id">
      <th scope="row">{{producto.id}}</th>
      <td>{{producto.nombre}}</td>
      <td>{{ producto.cantidad }}</td>
      <td>{{ producto.total }}</td>
    </tr>
    <tr class="table-dark">
      <th scope="row">-</th>
      <td>Total</td>
      <td>{{ totalCantidad }}</td>
      <td>{{ totalPrecio }}</td>
    </tr>
    </tbody>
    </table>
  </div>

</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const totalPrecio = computed(() => listaProductos.value.reduce((prev, current) => {
  if (prev.total) {
    return prev.total + current.total;
  }
  return prev + current.total
}), 0)

const totalCantidad = computed(() => listaProductos.value.reduce((prev, current) => {
  if (prev.cantidad) {
    return prev.cantidad + current.cantidad;
  }
  return prev + current.cantidad
}), 0)

const listaProductos = computed(() => {
  const lista = {};
  for (const producto of store.state.productosCarrito) {
    if (!lista[producto.id]) {
      lista[producto.id] = { id: producto.id, nombre: producto.nombre, total: producto.precio, cantidad: 1 }
    } else {
      lista[producto.id].total += producto.precio;
      lista[producto.id].cantidad += 1;
    }
  }
  return Object.values(lista);
});

const store = useStore()
</script>
