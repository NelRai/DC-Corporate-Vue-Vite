<script setup>
import { ref } from "vue";
import IconTwitter from "../components/icon-twitter.vue";
import IconLinkedIn from "../components/icon-linkedIn.vue";


defineProps({
  text: String,
});

const count = ref(0);
</script>

<template>
  <footer
    class="flex flex-col w-full justify-center gap-y-8 lg:gap-y-16 text-center text-white bg-black rounded-t-3xl lg:rounded-t-4xl -mt-12 px-8 py-16 z-70 relative"
  >
    <div
      class="flex flex-col lg:flex-row gap-y-8 lg:justify-between lg:items-center lg:w-full max-w-7xl lg:m-auto"
    >
      <img
        src="../assets/Logo_DEEP-CONTENT-Heise_micro_light.svg"
        alt=""
        class="mx-8 w-56 lg:w-80 lg:mx-0 lg:min-w-80"
      />
      <a href="mailto:" class="text-3xl lg:text-5xl text-white font-light"
        >hallo@deep-content.io</a
      >
    </div>

    <div
      class="flex flex-col lg:flex-row-reverse gap-8 lg:pt-8 lg:justify-between lg:border-t lg:w-full lg:items-end max-w-7xl lg:m-auto lg:border-t-neutral-500"
    >
      <div class="flex flex-row justify-center gap-4">
        <a href="" class="bg-dc-400 rounded-full p-5 h-16 w-16 lg:h-10 lg:w-10 lg:p-3 ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300" ><IconTwitter /></a>
        <a href="" class="bg-dc-400 rounded-full p-5 h-16 w-16 lg:h-10 lg:w-10 lg:p-3 ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300" ><IconLinkedIn /></a>
      </div>

      <div
        class="text-xl flex flex-col lg:flex-row gap-8 "
      >
        <a class="text-white font-light"><RouterLink to="/impressum">Impressum</RouterLink></a>
        <a class="text-white font-light"><RouterLink to="/datenschutz">Datenschutz</RouterLink></a>
      </div>
    </div>
  </footer>

  
</template>
