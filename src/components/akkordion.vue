<script setup>
import { ref } from 'vue'
import Faq from './Faq.vue'
const data = [
  {
    "id": 1,
    "question": "KI in Kommunikation, PR & Marketing ",
    "answer": "<h4>Generative KI: Tech, Tools, Prompts, Demos, FAQs</h4><ul><li> KI als Wendepunkt: Wo stehen wir jetzt?</li><li>Rechtliche und ethische Rahmenbedingungen für den Einsatz künstlicher Intelligenz im Unternehmen</li><li>Überblick über die besten KI-Tools für Content-Profis</li><li>Best Practice Beispiele</li></ul><h4>KI-Training: Bestehende Modelle mit eigenen Daten feintunen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li><li>Worauf muss ich achten, damit meine Daten nicht öffentlich zugänglich werden?</li></ul><h4> Eigene KI-Chatbots bauen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li></ul> <h4>Ausblick: Was bringt die Zukunft?</h4>",
    "isOpen": false
  },
  {
    "id": 2,
    "question": "Generative KI im Unternehmen: Eigenes KI-Training, Feintuning & Chatbots",
    "answer": "<h4>Generative KI: Tech, Tools, Prompts, Demos, FAQs</h4><ul><li> KI als Wendepunkt: Wo stehen wir jetzt?</li><li>Rechtliche und ethische Rahmenbedingungen für den Einsatz künstlicher Intelligenz im Unternehmen</li><li>Überblick über die besten KI-Tools für Content-Profis</li><li>Best Practice Beispiele</li></ul><h4>KI-Training: Bestehende Modelle mit eigenen Daten feintunen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li><li>Worauf muss ich achten, damit meine Daten nicht öffentlich zugänglich werden?</li></ul><h4> Eigene KI-Chatbots bauen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li></ul> <h4>Ausblick: Was bringt die Zukunft?</h4>",
    "isOpen": false
  },
  {
    "id": 3,
    "question": "KI und Recht: Wie setze ich generative KI im Unternehmen sicher ein?",
    "answer": "<h4>Generative KI: Tech, Tools, Prompts, Demos, FAQs</h4><ul><li> KI als Wendepunkt: Wo stehen wir jetzt?</li><li>Rechtliche und ethische Rahmenbedingungen für den Einsatz künstlicher Intelligenz im Unternehmen</li><li>Überblick über die besten KI-Tools für Content-Profis</li><li>Best Practice Beispiele</li></ul><h4>KI-Training: Bestehende Modelle mit eigenen Daten feintunen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li><li>Worauf muss ich achten, damit meine Daten nicht öffentlich zugänglich werden?</li></ul><h4> Eigene KI-Chatbots bauen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li></ul> <h4>Ausblick: Was bringt die Zukunft?</h4>",
    "isOpen": false
  },
  {
    "id": 4,
    "question": "KI im Unternehmen: Intensiv-Kurs rund um generative KI im Unternehmen",
    "answer": "<h4>Generative KI: Tech, Tools, Prompts, Demos, FAQs</h4><ul><li> KI als Wendepunkt: Wo stehen wir jetzt?</li><li>Rechtliche und ethische Rahmenbedingungen für den Einsatz künstlicher Intelligenz im Unternehmen</li><li>Überblick über die besten KI-Tools für Content-Profis</li><li>Best Practice Beispiele</li></ul><h4>KI-Training: Bestehende Modelle mit eigenen Daten feintunen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li><li>Worauf muss ich achten, damit meine Daten nicht öffentlich zugänglich werden?</li></ul><h4> Eigene KI-Chatbots bauen</h4><ul><li>Was ist Feintuning überhaupt?</li><li>Wie funktioniert es?</li><li>Wann ergibt Feintuning für mich Sinn?</li></ul> <h4>Ausblick: Was bringt die Zukunft?</h4>",
    "isOpen": false
  }
]
const faqs = ref(data)
const toggleAnswer = id => {
  faqs.value = faqs.value.map(faq => faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq)
  faqs.value = faqs.value.map(faq => faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)
}

defineProps({
  deText: String,
})


// const count = ref(0)
</script>

<template>
  <div>
    <div class="faqs">
      <faq v-for="faq in faqs" :key="faq.id" :faq="faq" @toggle-answer="toggleAnswer" />
    </div>
  </div>

</template>
