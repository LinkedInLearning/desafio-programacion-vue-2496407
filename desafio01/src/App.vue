<template>
  <div class="container">
    <h1 class="py-3">Lista de pendientes</h1>
        <ul class="list-group mb-3">
          <li class="list-group-item">
            <div class="row">
              <div class="col"></div>
              <div class="col"><button type="button" class="btn btn-secondary btn-sm">Hecho!</button></div>
            </div>
          </li>
        </ul>
        <div class="card px-5 py-5">
          <h2>Agrega más pendientes</h2>
          <div class="row">
            <div class="col">
              <input class="form-control" type="text" placeholder="Hacer la cena..."/>
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary">Agregar a lista</button>
            </div>
          </div>
        </div>
        </div>
</template>

<script>

export default {
  name: 'ListaPendientes',
  data: ()=> ({}),
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
