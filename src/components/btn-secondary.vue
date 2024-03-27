<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>
  <a :href="link" class="lg:w-max">
    <button
      class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-white text-dc-400 text-base border border-solid border-dc-400  lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-xl  ease-in-out hover:bg-dc-400 hover:text-white  hover:-translate-y-1 hover:saturate-150	duration-300  ">{{
    text }}</button>
  </a>

  <!-- <button class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-white text-dc-400 text-base lg:text-lg  border border-solid border-dc-400 rounded-3xl lg:rounded-full  background btn primary">{{ text }}</button>  -->
 
</template>
