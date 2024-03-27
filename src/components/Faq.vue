<script setup>
import { ref } from "vue";
import btnPrimary from "./btn-primary.vue";

defineProps(["faq"]); // recieving faq object as a prop.

const emit = defineEmits(["toggleAnswer"]); // defining events to emit
const handleClick = (id) => emit("toggleAnswer", id); // emitting toggleAnswer event with id attribute.


</script>

<template>
    <div class="faq border-b border-dc-neutral200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">

        <div class="header  cursor-pointer lg:[&_h3]:hover:text-dc-blue lg:[.workshop-label]:hover:border-dc-blue lg:[&_workshop-label]:hover:text-dc-blue "
            @click="() => handleClick(faq.id)" :class="[ { open: faq.isOpen }]" >
            <span class="workshop-label text-xs border lg:text-sm lg:font-normal border-red-400 text-red-400 rounded-md px-2 py-0.5 transition-all">Workshop 0{{ faq.id }}</span>
<div class="flex flex-row gap-x-4 justify-between items-center mt-2">
            <div class="question">
                <h3 class="text-lg lg:text-2xl transition-all" v-html="faq.question"></h3>
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
            <btnPrimary text="Jetzt Workshop buchen" />
        </div>
    </div>
</template>