<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(imagen, index) in imagenes" v-bind:key="index">
          <ImagenGaleria
          :src="imagen.url"
          @click="irImagen(index)"
          />
        </div>
    </div>
  </div>
</template>
<script setup>
import ImagenGaleria from "../components/ImagenGaleria";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


const imagenes = useStore().state.imagenes;
const router = useRouter();

const irImagen = (index) => ??

</script>
