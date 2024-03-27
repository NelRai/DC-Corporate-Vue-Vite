<script setup>
import { ref } from "vue";
import btnPrimary from "./btn-primary.vue";

defineProps(["faq"]); // recieving faq object as a prop.

const emit = defineEmits(["toggleAnswer"]); // defining events to emit
const handleClick = (id) => emit("toggleAnswer", id); // emitting toggleAnswer event with id attribute.


</script>

<template>
    <div class="faq border-b border-neutral-400 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
        <span class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5">Workshop 0{{ faq.id }}</span>

        <div class="header flex flex-row gap-x-4 justify-between items-center mt-2 cursor-pointer"
            @click="() => handleClick(faq.id)">
            <div class="question">
                <h3 class="text-lg" v-html="faq.question"></h3>
            </div>
            <div :class="['h-6 w-6 min-w-6 flex justify-center items-center bg-red-400 rounded-full', { open: faq.isOpen }]">
                <!-- + -->
                <span class="plus-vertical"></span>
                <span class="plus-horizontal"></span>
            </div>
        </div>
        <div :class="['answer', { open: faq.isOpen }]">
            <p class="mt-4 text-base mb-4" v-html="faq.answer"></p>
            <!--Extracting answer from faq prop -->
            <btnPrimary text="Jetzt Workshop buchen" />
        </div>
    </div>
</template>