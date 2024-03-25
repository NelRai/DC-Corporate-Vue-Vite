<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
})

const count = ref(0)
</script>

<template>
 
 <footer class="flex flex-col justify-center gap-y-8 text-center text-white bg-black rounded-t-3xl -mt-12 px-8 py-16">
  <img src="../assets/logo-test.png" alt="" class="mx-8">
  <a href="mailto:" class="text-2xl text-white font-light">hallo@deep-content.io</a>

  <div class="flex flex-row ">
    <img src="" alt="">
    <img src="" alt="">
  </div>

  <a href="" class="text-white">Impressum</a>
  <a href="" class="text-white">Datenschutz</a>

</footer>


 
</template>
