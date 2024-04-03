<script setup>
import { ref } from "vue";
import btnPrimary from "./btn-primary.vue";

defineProps(["faq"]); // recieving faq object as a prop.

const emit = defineEmits(["toggleAnswer"]); // defining events to emit
const handleClick = (id) => emit("toggleAnswer", id); // emitting toggleAnswer event with id attribute.
const visibleWorkshop = ref(false)


</script>

<template>
    <div class="faq border-b border-dc-neutral200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">

        <div class="header  cursor-pointer lg:[&_h3]:hover:text-dc-blue lg:[.workshop-label]:hover:border-dc-blue lg:[&_workshop-label]:hover:text-dc-blue "
            @click="() => handleClick(faq.id)" :class="[ { open: faq.isOpen }]" >
            <span class="workshop-label text-xs border lg:text-sm lg:font-normal border-red-400 text-red-400 rounded-md px-2 py-0.5 transition-all">Workshop 0{{ faq.id }}</span>
<div class="flex flex-row gap-x-4 justify-between items-center mt-2">
            <div class="question">
                <h4 class="text-lg lg:text-2xl transition-all" v-html="faq.question"></h4>
            </div>
            <div :class="['plus-sphere h-6 w-6 min-w-6 lg:h-10 lg:w-10 lg:min-w-10 flex justify-center items-center bg-red-400 rounded-full', { open: faq.isOpen }]">
                <!-- + -->
                <span class="plus-vertical lg:w-0.5 lg:h-4"></span>
                <span class="plus-horizontal lg:w-4 lg:h-0.5"></span>
            </div>
        </div>
        </div>
        <div class="marker:text-dc-400" :class="['answer', { open: faq.isOpen }]">
            <p class="text-base lg:text-lg mt-4 mb-4" v-html="faq.answer"></p>
            <!--Extracting answer from faq prop -->
            <btnPrimary text="Jetzt Workshop buchen" @click="visibleWorkshop = !visibleWorkshop" />
        </div>
    </div>


    <div id="modal" v-show="visibleWorkshop"
      class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center">

      <div
        class="w-11/12 lg:max-w-md  p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99">

        <form action="" class="flex flex-col gap-12 ">
          <h2 class="text-3xl font-light lg:col-span-2">Workshop buchen <br><span class="text-xl text-dc-400 block mt-2 font-normal leading-6" v-html="faq.question"></span></h2>
    

          <div class="flex flex-col gap-12">

            <div class="flex flex-row gap-16 text-dc-neutral900">
              <div class="flex justify-center items-center">
                <input type="radio" id="workshopChoice1" name="workshopRemote" placeholder="Remote" value="Remote"
                  class="w-6 h-6 mr-2 cursor-pointer  " required />
                <label for="workshopChoice1" class="cursor-pointer">Remote</label>
              </div>

              <div class="flex justify-center items-center">
                <input type="radio" id="workshopChoice2" name="workshopPraesenz" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer" required />
                <label for="workshopChoice2" class="cursor-pointer">Präsenz</label>
              </div>
            </div>


            <div class="flex flex-row gap-4 justify-between">
              <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="date" id="workshop-date" name="workshop-date" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="time" id="workshop-time" name="workshop-time" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="text" id="workshop-name" name="workshop-name" placeholder="Name*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="lcompany">Unternehmen</label><br> -->
              <input type="text" id="workshop-company" name="workshop-company" placeholder="Unternehmen"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" />
            </div>
            <div class="">
              <!-- <label for="lmail">E-Mail*</label><br> -->
              <input type="email" id="workshop-mail" name="workshop-mail" placeholder="E-Mail*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required />
            </div>
          </div>


          <input type="submit"
            class="w-full  min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-xl  ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300 cursor-pointer  "
            value="Senden" />
        </form>

      </div>

      <div id="modalBackground" v-show="visibleWorkshop" @click="visibleWorkshop = !visibleWorkshop"
        class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30">
      </div>

    </div><!-- end Modal visibleWorkshop -->


</template>