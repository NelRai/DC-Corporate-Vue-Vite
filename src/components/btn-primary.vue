<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
  link: String,
  iconExternal: Boolean,
})

const count = ref(0)
</script>

<template>
  <a :href="link" class="lg:w-max">
    <button
      class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-dc-400  text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-2xl  ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300  ">{{
    text }}</button>
  </a>

</template>
