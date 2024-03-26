<script setup>
import { ref } from "vue";

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
        src="../assets/logo-test.png"
        alt=""
        class="mx-8 lg:mx-0 lg:min-w-80"
      />
      <a href="mailto:" class="text-3xl lg:text-5xl text-white font-light"
        >hallo@deep-content.io</a
      >
    </div>

    <div
      class="flex flex-col lg:flex-row-reverse gap-8 lg:pt-8 lg:justify-between lg:border-t lg:border-t-white"
    >
      <div class="flex flex-row">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div
        class="text-xl flex flex-col lg:flex-row gap-8 lg:w-full max-w-7xl lg:m-auto"
      >
        <a href="" class="text-white font-light">Impressum</a>
        <a href="" class="text-white font-light">Datenschutz</a>
      </div>
    </div>
  </footer>
</template>
