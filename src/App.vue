<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import WrapperContent from "./components/wrapper-content.vue";
import btnPrimary from "./components/btn-primary.vue";
import btnSecondary from "./components/btn-secondary.vue";
import headlineH2 from "./components/headline-h2.vue";
import MagazineLinks from "./components/MagazineLinks.vue";
import LogoReel from "./components/logoReel.vue";

import Footer from "./components/footer.vue";
</script>

<template>
  <header class="fixed flex items-end	  w-full m-auto max-w-7xl left-1/2 -translate-x-2/4">
    <!--change to fixed if on scroll header hide is implemented  -->
    <div class="flex-1">


    
    <div class="">
      <img src="./assets/dc-logo-black.png" alt="" class=" h-20 bg-white  p-4 rounded-b-lg shadow-md" />
    </div>
  </div>
    <nav class="hidden lg:flex bg-white rounded-full flex-1 justify-center shadow-md">
      <ul class="flex flex-row gap-9 py-3 px-8 justify-center items-center">
        <li class="p-0 m-0 h-fit leading-4"><a href="" class="text-black text-lg">Über uns</a></li>
        <li class="p-0 m-0 h-fit leading-4"><a href="" class="text-black text-lg">Agentur</a></li>
        <li class="p-0 m-0 h-fit leading-4"><a href="" class="text-black text-lg">Medien</a></li>
        <li class="p-0 m-0 h-fit leading-4"><a href="" class="text-black text-lg">Kontakt</a></li>
      </ul>
    </nav>
    <div class="flex-1 flex justify-center gap-2">
      <span class="text-red-400 underline">EN</span>
      <span class="text-black">DE</span>
    </div>
  </header>

  <div class="flex flex-col gap-8 pt-28 pb-28 bg-pink-200">
    <div class="flex flex-col gap-8 text-center lg:text-left  w-full max-w-7xl m-auto ">
      <h1 class="font-blinker font-light text-3xl  lg:text-[7rem] lg:leading-[7rem] ">Neues Denken.<br />Neue Kompetenzen.</h1>
      <p class="text-base lg:text-3xl font-blinker">
        Medienhaus & KI-zentrierte Agentur test 
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-3 mx-10 lg:mx-0">
      <btnPrimary text="KI-Beratung" />
      <btnPrimary text="KI-Workshops" />
      <btnPrimary text="KI-Software" />
    </div>
  </div>

  <div
    class="flex flex-col gap-4 -mt-12  pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44"
  >
    <div class="px-8 lg:px-0 max-w-7xl m-auto flex flex-col gap-4 lg:gap-16">
      <p class="text-1xl lg:text-7xl">
        <span class="text-red-400">Deep Content by heise</span> ist ein
        digitales Medienhaus mit jahrelanger journalistischer Tech-Expertise.
      </p>
      <p class="lg:text-4xl" >
        Journalist:innen und Kommunikationsprofis arbeiten hier erfolgreich mit
        generativer KI. Unsere Agentur-Leistungen umfassen etwa Beratung zu KI
        im Unternehmen, sorgfältig abgestimmte Workshops, individuelle Beratung,
        etwa rund um Prompting, sowie das Profi-Workflow-Tool DC I/O.
      </p>
    </div>

    <LogoReel class="mt-4" />
  </div>

  <div
    class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 relative overflow-hidden -z-10"
  >
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
        <btnPrimary text="Jetzt Beratungstermin vereinbaren" />
      </div>
    </div>
    <div>
      <img src="./assets/background-element-01.svg" alt="" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">
    </div>

  </div>



  <div
    class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44"
  >
    <div class="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col gap-8 lg:gap-16">
        <headlineH2 headline="KI-Workshops" />
        <p>
          Sie möchten Ihre Mitarbeitenden auf den aktuellen Stand der Dinge
          bringen? Lernen Sie, was KI kann, was nicht, wie man damit umgeht und
          sinnvolle Anwendungsbereiche evaluiert, in denen Effizienz- und
          Qualitätsgewinne zu holen sind. Unsere beliebten Workshops lassen Sie
          nicht nur mitreden – sie wissen danach auch genau, was zu tun ist.
        </p>
      </div>
    </div>
  </div>

  <div
    class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44"
  >
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
          <btnSecondary text="Jetzt Demo buchen" class="w-full" />
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col gap-16 -mt-12 px-8 pt-8 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44"
  >
    <article
      class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row lg:gap-16"
    >
      <img class="w-full" src="./assets/mixed-image.jpg" alt="" />
      <div class="flex flex-col gap-8">
        <p>
          <span class="text-red-400">MIXED</span> ist in Deutschland, Österreich
          und der Schweiz Marktführer für News und Berichte rund um
          Zukunfts-Technologien wie VR, AR, KI und mehr. Bei uns trifft sich
          auch die deutschsprachige Mixed-Reality-Community. Bekannte
          Nachrichtenseiten wie Spiegel Online, TAZ, BILD, Golem, Manager
          Magazin, Venturebeat, Techcrunch, Road to VR und viele mehr verlinken
          auf unsere Artikel.
        </p>
        <MagazineLinks
          deText="mixed.de"
          deLink="https://mixed.de/"
          dePdfLink="https://deep-content.io/"
          enText="mixed-news.com"
          enLink="https://mixed-news.com/en/"
          enPdfLink="https://deep-content.io/"
        />
      </div>
    </article>

    <article
      class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row-reverse lg:gap-16"
    >
      <img class="w-full" src="./assets/decoder-image.png" alt="" />
      <div class="flex flex-col gap-8">
        <p>
          <span class="text-red-400">THE DECODER</span> ist eine internationale
          digitale Publikations-, Wissens- und Business-Plattform, die
          KI-Wissenschaft, Politik und Wirtschaft miteinander verbindet. Unsere
          Berichterstattung ist aktuell, sachlich, tiefgründig und dennoch
          unterhaltsam. Wir jagen keinem Hype hinterher. Wir legen Wert auf
          echte Relevanz.
        </p>
        <MagazineLinks
          deText="the-decoder.de"
          deLink="https://the-decoder.de/"
          dePdfLink="https://deep-content.io/"
          enText="the-decoder.com"
          enLink="https://the-decoder.com/"
          enPdfLink="https://deep-content.io/"
        />
      </div>
    </article>

    <article
      class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:gap-16 lg:flex-row"
    >
      <img class="w-full" src="./assets/s4g-image.png" alt="" />
      <div class="flex flex-col gap-8">
        <p>
          <span class="text-red-400">SPACE4GAMES</span> beschäftigt sich
          ausführlich und detailliert mit Videospielen und weiteren Tech-Themen,
          die unsere Autoren begeistern. Vom Report über die besten Guides und
          Top-Tools bis hin zu starken Meinungen. Die Artikel erscheinen auch in
          englischer Sprache für maximale Reichweite.
        </p>
        <MagazineLinks
          deText="space4games.com"
          deLink="https://space4games.com/de/"
          dePdfLink="https://deep-content.io/"
          enText="space4games.com/en/"
          enLink="https://space4games.com/en/"
          enPdfLink="https://deep-content.io/"
        />
      </div>
    </article>
  </div>

  <div
    class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44"
  >
    <div class="max-w-7xl m-auto">
      <form
        action=""
        class="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-row-5 lg:gap-16"
      >
        <h2 class="text-3xl lg:text-7xl lg:col-span-2">Schreib uns einfach.</h2>

        <div class="flex flex-col gap-12">
          <div class="">
            <!-- <label for="fname" class="text-1xl font-light">Name*</label><br> -->
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Name*"
              class="w-full border-b border-solid border-red-400 placeholder:text-black"
              required
            /><br />
          </div>

          <div class="">
            <!-- <label for="lcompany">Unternehmen</label><br> -->
            <input
              type="text"
              id="lcompany"
              name="lcompany"
              placeholder="Unternehmen"
              class="w-full border-b border-solid border-red-400 placeholder:text-black"
            />
          </div>
          <div class="">
            <!-- <label for="lmail">E-Mail*</label><br> -->
            <input
              type="email"
              id="lmail"
              name="lmail"
              placeholder="E-Mail*"
              class="w-full border-b border-solid border-red-400 placeholder:text-black"
              required
            />
          </div>
        </div>
        <div class="">
          <!-- <label for="lmsg">Nachricht*</label><br> -->
          <textarea
            type="text"
            id="lmsg"
            name="lmsg"
            placeholder="Nachricht*"
            class="w-full lg:h-full border-b border-solid border-red-400 min-h-32 placeholder:align-top placeholder:text-black"
          ></textarea>
        </div>

        <input
          type="submit"
          class="min-h-12 lg:w-max lg:min-w-80 lg:min-h-16 lg:px-12 lg:m-auto bg-red-400 text-white rounded-3xl lg:rounded-full background btn primary lg:col-span-2"
        />
      </form>
    </div>
  </div>

  <Footer />
</template>
