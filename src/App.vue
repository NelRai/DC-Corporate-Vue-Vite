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
  <div class="wrapper ">


    <Header />

   


    <div class="flex flex-col gap-8 pt-32 pb-28 lg:pt-44 lg:pb-28 lg:gap-32 ">
      <div class="flex flex-col gap-2 lg:gap-8 text-center lg:text-left w-full max-w-7xl m-auto">
        <h2 class="font-blinker font-light text-3xl lg:text-[7rem] lg:leading-[7rem]">
          Neues Denken.<br />Neue Kompetenzen.
        </h2>
        <h3 class="text-base lg:text-3xl font-blinker">
          Medienhaus & KI-zentrierte Agentur
        </h3>
      </div>
      <div class="flex flex-wrap justify-center gap-3 mx-10 lg:mx-0">
        <btnPrimary text="KI-Beratung" link="#ki-beratung" />
        <btnPrimary text="KI-Workshops" link="#ki-workshops" />
        <btnPrimary text="KI-Software" link="#ki-software" />
      </div>

      <HeroAnimation />
    </div>

    <div id="ueber-uns"
      class="flex flex-col gap-4 lg:gap-32 -mt-12 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-10 relative">
      <div class="px-8 lg:px-0 max-w-7xl m-auto flex flex-col gap-4 lg:gap-16">
        <h1 class="text-1xl lg:text-7xl">
          <span class="text-dc-400">Deep Content by heise</span> ist ein
          digitales Medienhaus mit jahrelanger journalistischer Tech-Expertise.
        </h1>
        <p class="lg:text-4xl">
          Journalist:innen und Kommunikationsprofis arbeiten hier erfolgreich mit
          generativer KI. Unsere Agentur-Leistungen umfassen etwa Beratung zu KI
          im Unternehmen, sorgfältig abgestimmte Workshops, individuelle Beratung,
          etwa rund um Prompting, sowie das Profi-Workflow-Tool DC I/O.
        </p>
      </div>

      <LogoReel class="mt-4" />
    </div>

    <div id="ki-beratung"
      class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 relative overflow-hidden z-20">
      <div class="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col gap-8 lg:gap-16">
          <headlineH2 headline="KI-Beratung" />
          <p>
            Zuerst muss man verstehen, was da eigentlich gerade mit KI passiert –
            und in welcher Geschwindigkeit. Dann stellt sich die wichtigste aller
            Fragen: Wie bekomme ich generative KI sinnvoll in meine Prozesse
            integriert? Wie sichere ich die Qualität? Und wie behalte ich die
            Kontrolle über die Anwendung von KI im Unternehmen? <br /><br />
            Unsere langjährige Erfahrung mit KI im Journalismus und in der
            Unternehmenskommunikation liefert die perfekte Grundlage für eine
            effektive Beratung. Sprechen Sie uns gern an.
          </p>
          <btnPrimary text="Jetzt Beratungstermin vereinbaren" @click="visibleBeratung = !visibleBeratung" />
        </div>
      </div>
      <div id="circle" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">

        <bgSVG01 />
        <bgSVG01b />

      </div>
    </div>

    <div id="ki-workshops"
      class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 overflow-hidden z-30 relative">
      <div class="max-w-7xl m-auto flex flex-col gap-8 ">
        <headlineH2 headline="KI-Workshops" />

        <div class="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
          <p>
            Sie möchten Ihre Mitarbeitenden auf den aktuellen Stand der Dinge
            bringen? Lernen Sie, was KI kann, was nicht, wie man damit umgeht und
            sinnvolle Anwendungsbereiche evaluiert, in denen Effizienz- und
            Qualitätsgewinne zu holen sind. Unsere beliebten Workshops lassen Sie
            nicht nur mitreden – sie wissen danach auch genau, was zu tun ist.
          </p>
          <akkordion />
        </div>
      </div>
      <!-- <div id="circle" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">

        <bgSVG01 />
        <bgSVG01b />

      </div> -->
    </div>

    <div id="ki-software"
      class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 overflow-hidden z-40 relative">
      <div class="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col gap-8 lg:gap-16">
          <headlineH2 headline="KI-Software" />
          <p>
            DC I/O ist die Unternehmenslösung für anpassbare, zuverlässige und
            transparente Content-Workflows mit generativer KI. Entwickelt
            von Content-Profis für Content-Profis. <br />
            <br />
            Mit einer geteilten Prompt-Bibliothek können Teams in Sekunden neue
            Inhalte aus bestehenden Quellen generieren und generative KI exakt auf
            ihre individuellen Workflows abstimmen. <br />
            <br />Integrieren Sie eigene Vektordatenbanken und nutzen Sie die
            Recherche-Superpower generativer KI für neue Inhalte. Wählen Sie aus
            den besten KI-Modellen oder binden Sie lokale Modelle für höchsten
            Datenschutz an.
            <br />
            <br />
            Ob Marketingabteilung mit drei Personen oder Redaktion mit 200
            Autorinnen und Autoren: DC I/O macht Ihre Inhaltsproduktion mit KI
            zukunftssicher.
          </p>
          <div class="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <btnPrimary text="Mehr über DC I/O" iconExternal class="w-full" />
            <btnSecondary text="Jetzt Demo buchen" class="w-full" @click="visibleDemo = !visibleDemo"  />
          </div>
        </div>
      </div>

      <!-- <div id="circle" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">

        <bgSVG01 />
        <bgSVG01b />

      </div> -->
    </div>

    <div id="medienhaus"
      class="flex flex-col gap-16 lg:gap-32 -mt-12 px-8 pt-8 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-50 relative">
      <article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row lg:gap-16">
        <img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images" src="./assets/mixed-magazine.svg" alt="" />
        <div class="flex flex-col gap-8">
          <p>
            <span class="text-dc-400">MIXED</span> ist in Deutschland, Österreich
            und der Schweiz Marktführer für News und Berichte rund um
            Zukunfts-Technologien wie VR, AR, KI und mehr. Bei uns trifft sich
            auch die deutschsprachige Mixed-Reality-Community. Bekannte
            Nachrichtenseiten wie Spiegel Online, TAZ, BILD, Golem, Manager
            Magazin, Venturebeat, Techcrunch, Road to VR und viele mehr verlinken
            auf unsere Artikel.
          </p>
          <MagazineLinks deText="mixed.de" deLink="https://mixed.de/" dePdfLink="https://deep-content.io/"
            enText="mixed-news.com" enLink="https://mixed-news.com/en/" enPdfLink="https://deep-content.io/" />
        </div>
      </article>

      <article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row-reverse lg:gap-16">
        <img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images" src="./assets/decoder-magazine.svg" alt="" />
        <div class="flex flex-col gap-8">
          <p>
            <span class="text-dc-400">THE DECODER</span> ist eine internationale
            digitale Publikations-, Wissens- und Business-Plattform, die
            KI-Wissenschaft, Politik und Wirtschaft miteinander verbindet. Unsere
            Berichterstattung ist aktuell, sachlich, tiefgründig und dennoch
            unterhaltsam. Wir jagen keinem Hype hinterher. Wir legen Wert auf
            echte Relevanz.
          </p>
          <MagazineLinks deText="the-decoder.de" deLink="https://the-decoder.de/" dePdfLink="https://deep-content.io/"
            enText="the-decoder.com" enLink="https://the-decoder.com/" enPdfLink="https://deep-content.io/" />
        </div>
      </article>

      <article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:gap-16 lg:flex-row">
        <img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images" src="./assets/s4g-magazine.svg" alt="" />
        <div class="flex flex-col gap-8">
          <p>
            <span class="text-dc-400">SPACE4GAMES</span> beschäftigt sich
            ausführlich und detailliert mit Videospielen und weiteren Tech-Themen,
            die unsere Autoren begeistern. Vom Report über die besten Guides und
            Top-Tools bis hin zu starken Meinungen. Die Artikel erscheinen auch in
            englischer Sprache für maximale Reichweite.
          </p>
          <MagazineLinks deText="space4games.com" deLink="https://space4games.com/de/"
            dePdfLink="https://deep-content.io/" enText="space4games.com/en/" enLink="https://space4games.com/en/"
            enPdfLink="https://deep-content.io/" />
        </div>
      </article>
    </div>


    <Contact />
    <Footer />

    
    <!-- <Modal v-show="visible"   /> -->

    <div id="modal" v-show="visibleBeratung"
      class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center">

      <div
        class="w-11/12 lg:max-w-md  p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99">

        <form action="" class="flex flex-col gap-12 ">
          <h2 class="text-3xl font-light lg:col-span-2">Jetzt Beratungstermin vereinbaren </h2>

          <div class="flex flex-col gap-12">

            <div class="flex flex-row gap-16 text-dc-neutral900">
              <div class="flex justify-center items-center">
                <input type="radio" id="beratungChoice1" name="beratung-remote" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer  " required />
                <label for="beratungChoice1" class="cursor-pointer">Remote</label>
              </div>

              <div class="flex justify-center items-center">
                <input type="radio" id="beratungChoice2" name="beratung-praesenz" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer" required />
                <label for="beratungChoice2" class="cursor-pointer">Präsenz</label>
              </div>
            </div>


            <div class="flex flex-row gap-4 justify-between">
              <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="date" id="beratung-date" name="beratung-date" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="time" id="beratung-time" name="beratung-time" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>
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

      <div id="modalBackground" v-show="visibleBeratung" @click="visibleBeratung = !visibleBeratung"
        class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30">
      </div>

    </div><!-- end Modal visibleBeratung -->

       <!-- <Modal v-show="visible"   /> -->

       <div id="modal" v-show="visibleDemo"
      class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center">

      <div
        class="w-11/12 lg:max-w-md  p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99">

        <form action="" class="flex flex-col gap-12 ">
          <h2 class="text-3xl font-light lg:col-span-2">Jetzt remote Demotermin vereinbaren</h2>

          <div class="flex flex-col gap-12">

            <!-- <div class="flex flex-row gap-16 text-dc-neutral900">
              <div class="flex justify-center items-center">
                <input type="radio" id="demoChoice1" name="remote" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer  " required />
                <label for="demoChoice1" class="cursor-pointer">Remote</label>
              </div>

              <div class="flex justify-center items-center">
                <input type="radio" id="demoChoice2" name="remote" placeholder="Präsenz" value="Präsenz"
                  class="w-6 h-6 mr-2 cursor-pointer" required />
                <label for="demoChoice2" class="cursor-pointer">Präsenz</label>
              </div>
            </div> -->


            <div class="flex flex-row gap-4 justify-between">
              <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="date" id="demo-date" name="demo-date" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="time" id="demo-time" name="demo-time" placeholder="TT/MM/JJJJ*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>
            </div>

            <div class="">
              <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
              <input type="text" id="demo-name" name="demo-name" placeholder="Name*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required /><br />
            </div>

            <div class="">
              <!-- <label for="lcompany">Unternehmen</label><br> -->
              <input type="text" id="demo-company" name="demo-company" placeholder="Unternehmen"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" />
            </div>
            <div class="">
              <!-- <label for="lmail">E-Mail*</label><br> -->
              <input type="email" id="demo-mail" name="demo-mail" placeholder="E-Mail*"
                class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required />
            </div>
          </div>


          <input type="submit"
            class="w-full  min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all	 relative top-0 hover:drop-shadow-xl  ease-in-out  hover:-translate-y-1 hover:saturate-150	duration-300 cursor-pointer  "
            value="Senden" />
        </form>

      </div>

      <div id="modalBackground" v-show="visibleDemo" @click="visibleDemo = !visibleDemo"
        class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30">
      </div>

    </div><!-- end Modal visibleDemo -->


       <!-- <Modal v-show="visible"   /> -->

       <div id="modal" v-show="visibleWorkshop"
      class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center">

      <div
        class="w-11/12 lg:max-w-md  p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99">

        <form action="" class="flex flex-col gap-12 ">
          <h2 class="text-3xl font-light lg:col-span-2">Jetzt Workshop buchen</h2>

          <div class="flex flex-col gap-12">

            <div class="flex flex-row gap-16 text-dc-neutral900">
              <div class="flex justify-center items-center">
                <input type="radio" id="workshopChoice1" name="workshopRemote" placeholder="Remote" value="Remote"
                  class="w-6 h-6 mr-2 cursor-pointer" required />
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

  </div>
</template>
