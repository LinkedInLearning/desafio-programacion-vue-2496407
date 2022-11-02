<template>
  <jsxNode></jsxNode>
</template>
<script lang="jsx" setup>

import ImagenGaleria from "./components/ImagenGaleria";

const imagenes = [
  './imagenes/imagen1.jpg',
  './imagenes/imagen2.jpg',
  './imagenes/imagen3.jpg',
  './imagenes/imagen4.jpg',
  './imagenes/imagen5.jpg',
  './imagenes/imagen6.jpg',
];

const jsxNode = () => {
  return (
    <div class="container">
      <div class="row">
        {imagenes.map(imagenUrl => (
          <div class="col-4">
            <ImagenGaleria src={imagenUrl} />
          </div>
        ))}
      </div>
    </div>);
};

</script>
