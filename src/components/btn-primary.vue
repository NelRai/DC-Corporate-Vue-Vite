<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>

  <button class="min-h-12 bg-red-400 text-white  text-base lg:text-lg rounded-3xl background btn primary">{{ text }}</button> 
 
</template>
