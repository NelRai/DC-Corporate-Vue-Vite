<script setup>
import { ref } from 'vue'

defineProps({
  text: String,
})

const count = ref(0)
const items = ref ([
  "logo-test",
  "mixed-image"


])
</script>

<template>
  <div>
    <ul class="flex">
      <li v-for="item in items">
        <img :src="('src/assets/' + item + '.png')" alt=""/>
      </li>
    </ul>


  </div>


 
</template>
