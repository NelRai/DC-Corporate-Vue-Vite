<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>

  <button class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-white text-dc-400 text-base lg:text-lg  border border-solid border-dc-400 rounded-3xl lg:rounded-full  background btn primary">{{ text }}</button> 
 
</template>
