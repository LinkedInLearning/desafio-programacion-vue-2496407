<template>
  <div class="container mt-5" v-if="infoImagen">
    <div class="row justify-content-around">
      <h3>{{ infoImagen.descripcion }}</h3>
    </div>
    <div class="row justify-content-around">
      <div class="col-5">
        <img class="img-fluid" :src="infoImagen.url" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore();
const route = useRoute();
const infoImagen = ref();

onMounted(() => {
  infoImagen.value = store.state.imagenes[??];
})
</script>
