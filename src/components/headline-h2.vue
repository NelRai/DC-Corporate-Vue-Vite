<script setup>
import { ref } from 'vue'

defineProps({
  headline: String,
})

const count = ref(0)
</script>

<template>

  <h2 class="text-3xl lg:text-7xl">{{headline}}</h2>
 
</template>
