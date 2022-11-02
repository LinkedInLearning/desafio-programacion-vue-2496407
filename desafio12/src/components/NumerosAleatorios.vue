<template>
  <div class="row text-center" v-if="uno !== ''">
    <div class="col"><h1>{{uno}}</h1></div>
    <div class="col"><h1>{{dos}}</h1></div>
    <div class="col"><h1>{{tres}}</h1></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const uno = ref('');
const dos = ref('');
const tres = ref('');

</script>

<style scoped>
.col{
  border: 3px solid black;
}
</style>
