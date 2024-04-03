<script setup>
import { onMounted } from "vue";
import { ref } from 'vue'

//Components
// import HelloWorld from "./components/HelloWorld.vue";
// import WrapperContent from "./components/wrapper-content.vue";
import Header from "./components/Header.vue";
// import navLink from "./components/nav-link.vue";
// import btnPrimary from "./components/btn-primary.vue";
// import btnSecondary from "./components/btn-secondary.vue";
// import headlineH2 from "./components/headline-h2.vue";
// import akkordion from "./components/akkordion.vue";
// import MagazineLinks from "./components/MagazineLinks.vue";
// import LogoReel from "./components/logoReel.vue";
// import bgSVG01 from "./components/bg-svg-01.vue";
// import bgSVG01b from "./components/bg-svg-01b.vue";
// import HeroAnimation from "./components/hero-bg-animation.vue";
// import Contact from "./components/contact.vue";

import Footer from "./components/footer.vue";
// import Modal from "./components/modal.vue";

// GSAP
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


//modal const
// const visibleBeratung = ref(false)
// const visibleDemo = ref(false)
// const visibleWorkshop = ref(false)



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

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})

 
</script>


<template>
  <div class="wrapper ">


    <Header />

  
    <div class="flex flex-col gap-8 pt-32 pb-28 lg:pt-44 lg:pb-28 lg:gap-32 ">
      <div class="flex flex-col gap-2 lg:gap-8 text-center lg:text-left w-full max-w-7xl m-auto">
        <h1 class="font-blinker font-light text-3xl lg:text-[7rem] lg:leading-[7rem]">
          Impressum
        </h1>
        <!-- <h3 class="text-base lg:text-3xl font-blinker">
          Medienhaus & KI-zentrierte Agentur
        </h3> -->
      </div>
      <!-- <div class="flex flex-wrap justify-center gap-3 mx-10 lg:mx-0">
        <btnPrimary text="KI-Beratung" link="#ki-beratung" />
        <btnPrimary text="KI-Workshops" link="#ki-workshops" />
        <btnPrimary text="KI-Software" link="#ki-software" />
      </div> -->

      <HeroAnimation />
    </div>    


    <div id="ki-beratung"
        class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 relative overflow-hidden z-20">
        <div class="max-w-7xl m-auto flex flex-col gap-16">
          <h2 class="text-3xl lg:text-7xl">Verantwortlich für dieses Angebot gemäß § 5 TMG / § 18 MStV:</h2>

          <div class="flex flex-col gap-8 lg:gap-16">
            <p>
              <strong>Deep Content GmbH</strong><br>
              Karl-Wiechert-Allee 10<br>
              30625 Hannover<br>
              Deutschland<br><br>

              Postfach 61 04 07<br>
              30604 Hannover<br><br>

              Telefon: +491717808216<br>
              E-Mail: hallo@deep-content.io<br>
              Website: deep-content.io<br><br>

              <strong>Vertretungsberechtigte Geschäftsführer:</strong><br>
              Benjamin Danneberg<br>
              Matthias Bastian<br>
              (Anschrift und Kontakt s.o.)<br><br>

              <strong>Inhaltlich Verantwortliche gem. § 18 Abs. 2 MStV:</strong><br>
              Benjamin Danneberg<br>
              Matthias Bastian<br>
              (Anschrift und Kontakt s.o.)<br><br>

              <strong>Umsatzsteuer-ID:</strong><br>
              DE326586221<br><br>

              <strong>Handelsregister:</strong><br>
              HRB 226465<br><br>

              <strong>Registergericht:</strong><br>
              Amtsgericht Hannover

              Ein Unternehmen der <a href="https://www.heise-gruppe.de/">Heise Gruppe</a>.
            </p>
          </div>

          <div>
            <p>

              <strong>Haftung für Inhalte</strong><br>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br>

              <strong>Haftung für Links</strong><br>
              Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss genommen werden
              kann. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend von dieser Website auf die
              rechtsverletzende Site entfernen.<br><br>

              <strong>Urheberrecht</strong>
              Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte Dritte erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
              erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
              einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend
              entfernen.<br><br>

              <small>Dieses Impressum wurde mit Hilfe des Impressum-Generators von
                HENSCHE Rechtsanwälte, Kanzlei für Arbeitsrecht erstellt.</small>
            </p>

          </div>
        </div>
        <!-- <div id="circle" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">

          <bgSVG01 />
          <bgSVG01b />

        </div> -->
      </div>


    <Contact />
    <Footer />

    


  </div>
</template>
