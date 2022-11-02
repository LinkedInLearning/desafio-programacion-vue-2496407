<template>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="toggle" v-model="valor">
    <label class="form-check-label" for="toggle">{{props.label}}</label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  label: String
});

const emits = defineEmits(['update:modelValue']);

const valor = ref()

watch(() => props.modelValue, () => valor.value = props.modelValue);
watch(() => valor.value, () => emits('update:modelValue', valor.value));

</script>

<style scoped>

</style>
