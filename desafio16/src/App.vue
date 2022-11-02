<template>
  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-2">
        <ContadorTiempo>
          <template v-slot="props">
            <h1>{{ props.tiempoActual }}</h1>
          </template>
        </ContadorTiempo>
      </div>
    </div>

    <div class="row justify-content-around">
      <div class="col-2">
        <ContadorTiempo>
          <template v-slot="props">
            <button class="btn btn-primary" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              {{ props.tiempoActual }}
            </button>
          </template>
        </ContadorTiempo>
      </div>
    </div>
  </div>

</template>

<script setup>
import ContadorTiempo from './components/ContadorTiempo.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
