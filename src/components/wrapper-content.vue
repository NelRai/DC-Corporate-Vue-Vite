<script setup>
import { ref } from 'vue'
import btnPrimary from './btn-primary.vue'


defineProps({
  headline: String,
  zindex: String,
})

const count = ref(0)
</script>

<template>
<div class="flex flex-col gap-8 -mt-12 px-8 py-16 w-full bg-white border border-neutral-300 border-solid rounded-3xl shadow-top3xl"> 
  <h2 class="text-3xl">{{headline}}</h2>
  <p>
    Zuerst muss man verstehen, was da eigentlich gerade mit KI passiert – und in welcher Geschwindigkeit. Dann stellt sich die wichtigste aller Fragen: Wie bekomme ich generative KI sinnvoll in meine Prozesse integriert? Wie sichere ich die Qualität? 
    Und wie behalte ich die Kontrolle über die Anwendung von KI im Unternehmen? <br><br>
    Unsere langjährige Erfahrung mit KI im Journalismus und in der Unternehmenskommunikation liefert die perfekte Grundlage für eine effektive Beratung. Sprechen Sie uns gern an.</p>

 <btnPrimary text="Jetzt Beratungstermin vereinbaren" />

</div>
</template>
