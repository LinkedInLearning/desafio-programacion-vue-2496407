<template>
    <div ref="figura" id="cuadrado"></div>
</template>

<script setup>

import gsap from 'gsap'
import { onMounted, ref, defineProps, watch } from 'vue'

const props = defineProps({
    velocidad: Number,
    movimiento: String
})

const figura = ref(null)
let animacion = undefined;

const correr = () => {
    gsap.killTweensOf(figura.value);
    gsap.set(figura.value, { x: 0, y: window.innerHeight / 2 });
    animacion = gsap.to(figura.value,
        { x: window.innerWidth, duration: props.velocidad, repeat: -1 });
}

const saltar = () => {
    gsap.killTweensOf(figura.value);
    gsap.set(figura.value, { x: window.innerWidth / 2, y: window.innerHeight - 400 });
    animacion = gsap.to(figura.value,
        { y: 0, duration: props.velocidad, repeat: -1, yoyo: true });
}

watch(() => props.movimiento, (valor) => {
    if (valor === 'correr') {
        correr();
    } else {
        saltar();
    }
});

watch(() => props.velocidad, (valor)=> animacion.duration(valor));

onMounted(() => saltar());
</script>

<style scoped>
#cuadrado {
    width: 100px;
    height: 100px;
    background-color: aqua;
    border-radius: 5px;
    border: dotted 5px #2c3e50;
    position: absolute;
    top: 300px;
    left: 10px;
}
</style>