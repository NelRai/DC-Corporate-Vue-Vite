<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
})

const count = ref(0)
const items = ref ([
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black",
  "dc-logo-black"
])
</script>

<template>
  <div class="">


  <div class="w-full inline-flex flex-nowrap overflow-hidden mt-8">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      <!-- <li class="first-slide">
        <span><img :src="('src/assets/dc-logo-black.png')" alt="" class="min-h-8 w-auto" /></span>
      </li> -->
      <li v-for="item in items" class="" >
      <img :src="('src/assets/' + item + '.png')" alt="" class="" />
      </li>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      <li v-for="item in items" class="" >
      <img :src="('src/assets/' + item + '.png')" alt="" class="" />
      </li>
    </ul>


  </div>

</div>
 
</template>


<!-- <style>
.scroll {
  position: relative;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  padding: 0;
}

.m-scroll {
  overflow: hidden;
  height: 100%;
  white-space: nowrap;
  animation: scrollText 20s infinite linear;
  margin: 0;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  width: fit-content;
}

span {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: white;
}

@keyframes scrollText {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style> -->
