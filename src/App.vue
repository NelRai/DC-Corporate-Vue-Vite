<script setup>
import { onMounted } from "vue";
import { ref } from 'vue'

//Components
// import HelloWorld from "./components/HelloWorld.vue";
// import WrapperContent from "./components/wrapper-content.vue";
import Header from "./components/Header.vue";
// import navLink from "./components/nav-link.vue";
import btnPrimary from "./components/btn-primary.vue";
import btnSecondary from "./components/btn-secondary.vue";
import headlineH2 from "./components/headline-h2.vue";
import akkordion from "./components/akkordion.vue";
import MagazineLinks from "./components/MagazineLinks.vue";
import LogoReel from "./components/logoReel.vue";
import bgSVG01 from "./components/bg-svg-01.vue";
import bgSVG01b from "./components/bg-svg-01b.vue";
import HeroAnimation from "./components/hero-bg-animation.vue";
import Contact from "./components/contact.vue";

import Footer from "./components/footer.vue";
import Modal from "./components/modal.vue";

// GSAP
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


//modal const
const visibleBeratung = ref(false)
const visibleDemo = ref(false)
const visibleWorkshop = ref(false)



//burger menu code

// window.addEventListener("DOMContentLoaded", (event) => {
//   const tham = document.querySelector(".tham");

//   tham.addEventListener('click', () => {
//     tham.classList.toggle('tham-active');
//   });
// });

const hamburger = ref(false)


// Navbar Animation on Scroll

if (typeof window !== "undefined") {
  var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("navbar--hidden");
  } 
  
  else {
    document.getElementById("navbar").classList.add("navbar--hidden");
  }
  prevScrollpos = currentScrollPos;
}

}


</script>

<template>
    <RouterView />
</template>
