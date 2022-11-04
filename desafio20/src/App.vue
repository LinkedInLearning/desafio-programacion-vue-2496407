<template>
  <div class="row mt-5">
    <div v-for="i in 24" v-bind:key="i" class="drop-area col-1" @dragenter.self="dragOverHandling"
      @dragover.self="dragOverHandling" @dragleave.self="dragLeave" @drop="drop"></div>
  </div>
  <div class="row">
    <div class="col">
      <div id="dragable" class="dragable"></div>
    </div>
    <div class="col">
      <div id="dragable2" class="dragable"></div>
    </div>
    <div class="col">
      <div id="dragable3" class="dragable"></div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useDraggable } from './composable'

onMounted(() => {
  useDraggable('dragable2')
  useDraggable('dragable')
  useDraggable('dragable3')
})

const dragOverHandling = (e) => {
    e.preventDefault();
    e.target.classList.add('drop-hover');
  }

  const dragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('drop-hover');
  }

  const drop = (e) => {
    e.target.classList.remove('drop-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.dragable {
  width: 75px;
  height: 100px;
  background-color: coral;
  border-radius: 5px;
}

.drop-area {
  border: 1px solid grey;
  height: 200px;
  padding: 50px 0;
}

.drop-hover {
  border-color: aqua;
  border-width: 2px;
}
</style>