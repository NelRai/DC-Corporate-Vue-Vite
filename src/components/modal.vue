<script setup>
import { ref } from "vue";

defineProps({
  visibleBeratung: Boolean,
});


 const visibleBeratung = ref(true)



// function myFunction() {
//   var element = document.getElementById("modal");
//   element.style.display = "none";

// }

</script>

<template>
 <div id="modal" v-show="visibleBeratung"
      class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center">


      <div
        class="w-11/12 lg:max-w-md  p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99">

        <form action="" class="flex flex-col gap-12 ">
          <h2 class="text-3xl font-light lg:col-span-2">Jetzt Beratungstermin vereinbaren </h2>

          <div class="flex flex-col gap-12">

            <div class="flex flex-row gap-16 text-dc-neutral900">
              <div class="flex justify-center items-center">
                <input type="radio" id="contactChoice1" name="remote" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer  " required />
                <label for="contactChoice1" class="cursor-pointer">Remote</label>
              </div>

              <div class="flex justify-center items-center">
                <input type="radio" id="contactChoice2" name="remote" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer" required />

                <label for="contactChoice2" class="cursor-pointer">Präsenz</label>


              </div>

            </div>



            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="date" id="beratung-date" name="beratung-date" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="text" id="beratung-name" name="beratung-name" placeholder="Name*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="lcompany">Unternehmen</label><br> -->
              <input type="text" id="beratung-company" name="beratung-company" placeholder="Unternehmen"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" />
            </div>
            <div class="">
              <!-- <label for="lmail">E-Mail*</label><br> -->
              <input type="email" id="beratung-mail" name="beratung-mail" placeholder="E-Mail*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required />
            </div>
          </div>


          <input type="submit"
            class="w-full  min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-xl  ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300 cursor-pointer  "
            value="Senden" />
        </form>

      </div>

      <div id="modalBackground" v-show="visibleBeratung" @click="$emit(visibleBeratung = !visibleBeratung)"
        class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30">

      </div>


    </div>



</template>
