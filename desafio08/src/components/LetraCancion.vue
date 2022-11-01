<template>
    <h3 ref="contenedor"></h3>
</template>
<script setup>
import { ref, defineProps, watch } from 'vue'
import { gsap } from "gsap";

const contenedor = ref(null);

const props = defineProps({
    cancion: Object
});

const empezarAnimacion = () => {
    gsap.killTweensOf(contenedor.value);
    animarLetra(0);
}

const animarLetra = (index) => {
    contenedor.value.innerText = props.cancion[index].letra;
    gsap.fromTo(contenedor.value, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.to(contenedor.value,
        {
            opacity: 0,
            delay: props.cancion[index].duracion,
            duration: 0.5,
            onComplete: animarLetra,
            onCompleteParams: [index + 1]
        });
}

watch(() => props.cancion, empezarAnimacion);

</script>

<style scoped>

</style>
