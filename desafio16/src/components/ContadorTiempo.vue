<template>                                                                                          
                                                              
</template>                                                                                         

<script setup>                                                                                      
import { ref } from 'vue'
import moment from 'moment'

const tiempoActual = ref(null)

setInterval(() => {
  tiempoActual.value = moment().format('HH:mm:ss');
}, 1000);

</script> 