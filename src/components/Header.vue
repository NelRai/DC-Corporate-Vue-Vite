<script setup>
import { ref } from 'vue'
import navLink from "./nav-link.vue";

const hamburger = ref(false)

defineProps({
  msg: String,
})

</script>

<template>
  <header id="navbar"
    class="fixed flex lg:grid px-4 lg:pt-3 lg:px-0 items-center lg:items-end w-full m-auto max-w-7xl left-1/2 z-99 navbar transition-all rounded-b-lg shadow-md backdrop-blur-sm bg-dc-neutral50/70 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"
    :class="[{ navbarHidden: hamburger }]">

    <div class="flex-1 lg:absolute lg:top-0">
      <div class="">
        <img src="../assets/Logo_DEEP-CONTENT-Heise_micro.svg" alt=""
          class="h-auto w-44 lg:w-52 lg:bg-dc-neutral50/80  py-4 lg:p-4 lg:rounded-b-lg lg:shadow-md lg:backdrop-blur-sm" />
      </div>
    </div>
    <!-- Hamburger -->
    <div class="tham tham-e-squeeze tham-w-6 lg:hidden z-99" @click="hamburger = !hamburger"
      :class="[{ 'tham-active': hamburger }]">
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>


    <nav
      class="hidden justify-self-center lg:flex bg-dc-neutral50/80 rounded-full flex-initial justify-center shadow-md backdrop-blur-sm  lg:visible">
      <ul
        class="flex flex-col lg:h-auto lg:flex-row gap-5 py-3 px-8 justify-start items-start lg:justify-center lg:items-center z-99">
        <li class="p-0 m-0 h-fit leading-4">
          <RouterLink to="/#ueber-uns">
            <navLink text="Über uns" />
          </RouterLink>
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <RouterLink to="/#ki-beratung">
            <navLink text="KI-Agentur" />
          </RouterLink>
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <RouterLink to="/#medienhaus">
            <navLink text="Medienhaus" />
          </RouterLink>
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <RouterLink to="/#kontakt">
            <navLink text="Kontakt" />
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex-1 justify-center gap-2 text-lg font-normal hidden">
      <span class="text-dc-400 underline">EN</span>
      <span class="text-dc-neutral900">DE</span>
    </div>
  </header>



  <div
    class="hamburgerMenu fixed bg-dc-neutral50/90 flex-initial justify-center shadow-md backdrop-blur-sm lg:hidden z-70"
    :class="[{ hamburgerVisible: hamburger }]">

    <ul class="flex flex-col    w-screen h-screen  gap-5 py-3 px-8 pt-32 justify-start items-center">
      <li class="p-0 m-0 h-fit leading-4 ">
        <RouterLink to="/#ueber-uns">
          <navLink text="Über uns" class="!text-2xl" @click="hamburger = !hamburger" />
        </RouterLink>
      </li>
      <li class="p-0 m-0 h-fit leading-4">
        <RouterLink to="/#ki-beratung">
          <navLink text="KI-Agentur" class="!text-2xl" @click="hamburger = !hamburger" />
        </RouterLink>
      </li>
      <li class="p-0 m-0 h-fit leading-4">
        <RouterLink to="/#medienhaus">
          <navLink text="Medienhaus" class="!text-2xl" @click="hamburger = !hamburger" />
        </RouterLink>
      </li>
      <li class="p-0 m-0 h-fit leading-4">
        <RouterLink to="/#kontakt">
          <navLink text="Kontakt" class="!text-2xl" @click="hamburger = !hamburger" />
        </RouterLink>
      </li>
    </ul>
  </div>

</template>
