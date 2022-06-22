<script setup>
import {ref} from 'vue'

const text = ref('Hi 👋')
</script>

<template>
  The first input:
  <input
      :value="text"
      @input="event => text = event.target.value">
  <hr>
  The second input (actually the same with first one):
  <input v-model="text">
</template>
