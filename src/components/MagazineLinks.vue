<script setup>
import { ref } from 'vue'

defineProps({
  deText: String,
  deLink: String,
  dePdfLink: String,
  enText: String,
  enLink: String,
  enPdfLink: String,
})


const count = ref(0)
</script>

<template>
  <div class="grid grid-cols-[auto_1fr_1fr] gap-2">
    <span class="font-normal text-neutral-400">DE</span><a class="text-red-400" :href="deLink">{{deText}}</a> <a class="text-black" :href="dePdfLink">Mediadaten <span>PDF</span></a>
    <div class="col-span-3 border-b border-solid	border-neutral-200"></div>
    <span class="font-normal text-neutral-400">EN</span><a class="text-red-400" :href="enLink">{{enText}}</a> <a class="text-black" :href="enPdfLink">Mediadaten <span>PDF</span></a>
  </div>
</template>
