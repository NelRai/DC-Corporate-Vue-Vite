<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>

  <button class="bg-red-400 text-white rounded-3xl background btn primary">{{ text }}</button> 
 
</template>
