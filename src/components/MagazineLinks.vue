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
  <div class="grid grid-cols-[auto_1fr_1fr] gap-2 text-sm lg:text-xl">
    <span class="font-normal text-neutral-400">DE</span><a class="text-red-400" :href="deLink">{{deText}}</a> <a class="text-black justify-self-end flex items-center gap-2  lg:justify-self-auto		" :href="dePdfLink">Mediadaten <span class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5">PDF</span></a>
    <div class="col-span-3 border-b border-solid	border-neutral-200"></div>
    <span class="font-normal text-neutral-400">EN</span><a class="text-red-400" :href="enLink">{{enText}}</a> <a class="text-black justify-self-end flex items-center gap-2 lg:justify-self-auto		" :href="enPdfLink">Mediadaten <span class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5">PDF</span></a>
  </div>
</template>
