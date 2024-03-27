<script setup>
import { ref } from "vue";

defineProps({
  text: String,
});

const count = ref(0);
</script>

<template>
  <div id="kontakt"
      class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-60 relative">
      <div class="max-w-7xl m-auto">
        <form action="" class="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-row-5 lg:gap-16">
          <h2 class="text-3xl lg:text-7xl lg:col-span-2">Kontakt</h2>

          <div class="flex flex-col gap-12">
            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="text" id="fname" name="fname" placeholder="Name*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="lcompany">Unternehmen</label><br> -->
              <input type="text" id="fcompany" name="fcompany" placeholder="Unternehmen"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" />
            </div>
            <div class="">
              <!-- <label for="lmail">E-Mail*</label><br> -->
              <input type="email" id="fmail" name="fmail" placeholder="E-Mail*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required />
            </div>
          </div>
          <div class="">
            <!-- <label for="lmsg">Nachricht*</label><br> -->
            <textarea type="text" id="fmsg" name="fmsg" placeholder="Nachricht*"
              class="w-full lg:h-full border-b border-solid border-dc-400 min-h-32 placeholder:align-top placeholder:text-dc-neutral900"></textarea>
          </div>

          <input type="submit"
            class="w-full lg:w-max font-normal min-h-12 lg:min-h-16 lg:px-12 bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-xl  ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300  cursor-pointer " 
            value="Senden"

            />
        </form>
      </div>
    </div>



</template>
