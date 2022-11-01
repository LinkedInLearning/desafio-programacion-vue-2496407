<template>
  <div class="row mt-5">
    <div
      v-for="i in 24"
      v-bind:key="i"
      class="drop-area col-1"
      @dragenter.self="dragOverHandling"
      @dragover.self="dragOverHandling"
      @dragleave.self="dragLeave"
      @drop="drop"
    ></div>
  </div>
  <div class="dragable" @dragstart.self="dragStart" draggable="true" ref="caja"></div>
</template>

<script setup>
import { ref } from 'vue'

const caja = ref(null)

const dragStart = (e)=>{
  e.dataTransfer.setData('text/plain', caja.value.id);
}

const dragOverHandling = (e) => {
    e.preventDefault();
    e.target.classList.add('drop-hover');
}

const dragLeave = (e)=>{
  e.preventDefault();
  e.target.classList.remove('drop-hover');
}

const drop = (e) => {
    e.target.classList.remove('drop-over');
    e.target.appendChild(caja.value);
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.dragable{
  width: 75px;
  height: 100px;
  background-color: coral;
  border-radius: 5px;
}
.drop-area{
  border: 1px solid grey;
  height: 200px;
  padding: 50px 0;
}
.drop-hover{
  border-color:aqua;
  border-width: 2px;
}
</style>
