<template>
  <div class="container mt-5">
    <div class="row justify-content-around">
      <div class="col-2">
        <p>valorToggle: {{valorToggle}}</p>
        <ComponenteToggle v-model="valorToggle" label="Prueba Toggle"/>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponenteToggle from './components/ComponenteToggle'

const valorToggle = ref(false);

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
