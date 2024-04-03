<script setup>
import { ref } from 'vue'

defineProps({
  headline: String,
})

const count = ref(0)
</script>

<template>

  <h3 class="text-3xl lg:text-7xl">{{headline}}</h3>
 
</template>
