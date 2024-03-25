<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>

  <button class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-red-400 text-white  text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary">{{ text }}</button> 
 
</template>
