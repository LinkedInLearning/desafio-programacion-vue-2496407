<template>
  <div class="row text-center" v-if="uno !== ''">
    <div class="col"><h1>{{uno}}</h1></div>
    <div class="col"><h1>{{dos}}</h1></div>
    <div class="col"><h1>{{tres}}</h1></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue'
import { generarAleatorio } from '../utils'

const uno = ref('');
const dos = ref('');
const tres = ref('');

const numeroRandom = () => generarAleatorio(1, 3);

const emit = defineEmits('ganador');

const props = defineProps({
  generarAleatorio: Number
})

watch(() => props.generarAleatorio, () => {
  uno.value = numeroRandom();
  dos.value = numeroRandom();
  tres.value = numeroRandom();

  if(uno.value === dos.value && tres.value === dos.value){
    emit('ganador')
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col{
  border: 3px solid black;
}
</style>
