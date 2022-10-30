<template>
  <h3 v-tiempo>2022-10-30 08:30:00.12</h3>
  <h3 v-tiempo>2022-10-29 08:30:00.12</h3>
  <h3 v-tiempo>2022-10-28 08:30:00.12</h3>
  <h3 v-tiempo>2022-10-27 08:30:00.12</h3>
</template>

<script setup>
import moment from 'moment'

const vTiempo = {
  created: (el) => formatoFecha(el),
  updated: (el) => formatoFecha(el)
}

const formatoFecha = (el) => {
  const ahora = moment(new Date()); //fecha actual
  const fechaTexto = moment(el.innerText.trim()); // fecha del texto
  const duracion = moment.duration(ahora.diff(fechaTexto));
  const horas = duracion.asHours();

  if( horas < 24){
    el.innerText = `Hace ${Math.floor(horas)} horas`;
    return;
  }

  if(horas >= 24 && horas <= 48){
    el.innerText = 'Ayer';
    return;
  }

  el.innerText = `Hace  ${Math.floor(horas / 24)} días`;

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
