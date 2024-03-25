<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>

  <button class="w-full min-h-12 bg-white text-red-400 text-base lg:text-lg  border border-solid border-red-400 rounded-3xl background btn primary">{{ text }}</button> 
 
</template>
