<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  link: String,
})

const count = ref(0)
</script>

<template>
  <a :href="link" class="text-dc-neutral900 text-lg transition-all bg-transparent hover:bg-opacity-40 hover:bg-slate-200 hover:text-black rounded-full py-2 px-3">{{text}}</a>
</template>
