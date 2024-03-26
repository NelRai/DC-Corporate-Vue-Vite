<script setup>
import { ref } from "vue";

defineProps({
  text: String,
});

const count = ref(0);
</script>

<template>

<svg id="svg-circle" width="995" height="995" viewBox="0 0 995 995" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.5" cx="497.46" cy="497.46" r="497.46" transform="rotate(-90 497.46 497.46)" fill="url(#paint0_linear_4875_623)"/>
<defs>
<linearGradient id="paint0_linear_4875_623" x1="497.46" y1="-6.10352e-05" x2="497.46" y2="994.919" gradientUnits="userSpaceOnUse">
<stop stop-color="#BECEFF">
  <animate attributeName="stop-color" values="#FF646F; #BECEFF; #FF646F" dur="6s" repeatCount="indefinite"></animate>

</stop>
<stop offset="1" stop-color="#FF646F">
  <animate attributeName="stop-color" values="#BECEFF; #FF646F; #BECEFF" dur="6s" repeatCount="indefinite"></animate>

</stop>
</linearGradient>
</defs>
</svg>


</template>
