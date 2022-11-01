<template>
  <div class="rueda" ref="circulo"></div>
</template>

<script setup>
import { defineProps, ref, watch, onMounted, computed } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  direccion: String,
  velocidad: Number
})

const circulo = ref(null)

let animacion = undefined;

const velocidadCalculada = computed(() => props.velocidad <= 0? 0.3 : props.velocidad);

const animar = () =>{
  gsap.killTweensOf(circulo.value)
  animacion = gsap.to(circulo.value, {
    duration: velocidadCalculada.value,
    rotation: props.direccion === 'derecha'? 180 : -180,
    repeat: -1
  });
}

watch(() => props.velocidad, () => animacion.duration(velocidadCalculada.value))

watch(() => props.direccion, () => animar())

onMounted(() => animar())

</script>

<style scoped>
.rueda {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border-color: blueviolet;
  border-width: 8px;
  border-style: dotted dashed solid double;
  background-color: burlywood;
}
</style>
