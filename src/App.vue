<script setup>
import HelloWorld from './components/HelloWorld.vue'
import WrapperContent from './components/wrapper-content.vue'
import btnPrimary from './components/btn-primary.vue'
import headlineH2 from './components/headline-h2.vue'
import MagazineLinks from './components/MagazineLinks.vue'
import LogoReel from './components/logoReel.vue'


</script>

<template>

  <!-- <HelloWorld asd="Vite + Vue ggg" /> -->
  <!-- <WrapperContent headline="KI-Beratung" :style="{'z-index': '1'}" />
  <WrapperContent headline="KI-Workshops" :style="{'z-index': '2'}" />
  <WrapperContent headline="KI-Software" :style="{'z-index': '3'}" /> -->


<div class="text-center flex flex-col gap-8 pt-8 pb-16 bg-pink-200">
  <div>
    <h1 class="font-light text-3xl">Neues Denken.<br>Neue Kompetenzen.</h1>
    <p class="text-base">Medienhaus & KI-zentrierte Agentur </p>
  </div>
  <div class="flex flex-wrap justify-center	gap-3">
    <btnPrimary text="KI-Beratung" />
    <btnPrimary text="KI-Workshops" />
    <btnPrimary text="KI-Software" />
</div>


</div>

<div class="flex flex-col gap-8 -mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl shadow-top3xl"> 
  <headlineH2 headline="Deep Content by heise ist ein digitales Medienhaus mit jahrelanger journalistischer Tech-Expertise." />
  <p>
    Journalist:innen und Kommunikationsprofis arbeiten hier erfolgreich mit generativer KI. Unsere Agentur-Leistungen umfassen etwa Beratung zu KI im Unternehmen, sorgfältig abgestimmte Workshops, individuelle Beratung, etwa rund um Prompting, sowie das Profi-Workflow-Tool DC I/O.
  </p>

  <LogoReel />

</div>


<div class="flex flex-col gap-8 -mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl shadow-top3xl"> 
  <headlineH2 headline="KI-Beratung" />
  <p>
    Zuerst muss man verstehen, was da eigentlich gerade mit KI passiert – und in welcher Geschwindigkeit. Dann stellt sich die wichtigste aller Fragen: Wie bekomme ich generative KI sinnvoll in meine Prozesse integriert? Wie sichere ich die Qualität? 
    Und wie behalte ich die Kontrolle über die Anwendung von KI im Unternehmen? <br><br>
    Unsere langjährige Erfahrung mit KI im Journalismus und in der Unternehmenskommunikation liefert die perfekte Grundlage für eine effektive Beratung. Sprechen Sie uns gern an.
  </p>
 <btnPrimary text="Jetzt Beratungstermin vereinbaren" />
</div>

<div class="flex flex-col gap-8 -mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl shadow-top3xl"> 
  <headlineH2 headline="KI-Workshops" />
  <p>
    Sie möchten Ihre Mitarbeitenden auf den aktuellen Stand der Dinge bringen? Lernen Sie, was KI kann, was nicht, wie man damit umgeht und sinnvolle Anwendungsbereiche evaluiert, in denen Effizienz- und Qualitätsgewinne zu holen sind. Unsere beliebten Workshops lassen Sie nicht nur mitreden – sie wissen danach auch genau, was zu tun ist.
  </p>
</div>

<div class="flex flex-col gap-8 -mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl shadow-top3xl"> 
  <headlineH2 headline="KI-Software" />
  <p>
    DC I/O ist die Unternehmenslösung für anpassbare, zuverlässige und transparente Content-Workflows mit generativer KI. Entwickelt von Content-Profis für Content-Profis. 
Mit einer geteilten Prompt-Bibliothek können Teams in Sekunden neue Inhalte aus bestehenden Quellen generieren und generative KI exakt auf ihre individuellen Workflows abstimmen.
Integrieren Sie eigene Vektordatenbanken und nutzen Sie die Recherche-Superpower generativer KI für neue Inhalte. Wählen Sie aus den besten KI-Modellen oder binden Sie lokale Modelle für höchsten Datenschutz an.
<br> <br>
Ob Marketingabteilung mit drei Personen oder Redaktion mit 200 Autorinnen und Autoren: DC I/O macht Ihre Inhaltsproduktion mit KI zukunftssicher.

</p>
 <btnPrimary text="Mehr über DC I/O" iconExternal />
</div>

<section class="flex flex-col gap-16 -mt-12 px-8 pt-8 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl shadow-top3xl">
  <article class="flex flex-col gap-8">
    <img class="w-full" src="./assets/mixed-image.jpg" alt="">
    <p>MIXED ist in Deutschland, Österreich und der Schweiz Marktführer für News und Berichte rund um Zukunfts-Technologien wie VR, AR, KI und mehr. Bei uns trifft sich auch die deutschsprachige Mixed-Reality-Community. Bekannte Nachrichtenseiten wie Spiegel Online, TAZ, BILD, Golem, Manager Magazin, Venturebeat, Techcrunch, Road to VR und viele mehr verlinken auf unsere Artikel.</p>
    <MagazineLinks deText="mixed.de" deLink="https://mixed.de/" dePdfLink="https://deep-content.io/" enText="mixed-news.com" enLink="https://mixed-news.com/en/" enPdfLink="https://deep-content.io/" />
  </article>

  <article class="flex flex-col gap-8">
    <img class="w-full" src="./assets/s4g-image.png" alt="">
    <p>SPACE4GAMES beschäftigt sich ausführlich und detailliert mit Videospielen und weiteren Tech-Themen, die unsere Autoren begeistern. Vom Report über die besten Guides und Top-Tools bis hin zu starken Meinungen. Die Artikel erscheinen auch in englischer Sprache für maximale Reichweite.</p>
    <MagazineLinks deText="space4games.com" deLink="https://space4games.com/de/" dePdfLink="https://deep-content.io/" enText="space4games.com/en/" enLink="https://space4games.com/en/" enPdfLink="https://deep-content.io/" />
  </article>

  <article class="flex flex-col gap-8">
    <img class="w-full" src="./assets/decoder-image.png" alt="">
    <p>THE DECODER ist eine internationale digitale Publikations-, Wissens- und Business-Plattform, die KI-Wissenschaft, Politik und Wirtschaft miteinander verbindet. Unsere Berichterstattung ist aktuell, sachlich, tiefgründig und dennoch unterhaltsam. Wir jagen keinem Hype hinterher. Wir legen Wert auf echte Relevanz.</p>
    <MagazineLinks deText="the-decoder.de" deLink="https://the-decoder.de/" dePdfLink="https://deep-content.io/" enText="the-decoder.com" enLink="https://the-decoder.com/" enPdfLink="https://deep-content.io/" />
  </article>
</section>

<section>
  <form action="" class="flex flex-col">
    <label for="fname">Name*</label><br>
    <input type="text" id="fname" name="fname" required class="border-b border-solid border-red-400"><br>

    <label for="lname">Unternehmen</label><br>
    <input type="text" id="lname" name="lname">

    <label for="lname">E-Mail*</label><br>
    <input type="email" id="lname" name="lname" required>

    <label for="lname">Nachricht*</label><br>
    <input type="text" id="lname" name="lname">

    <input type="submit">

  </form>


</section>




<footer class="flex flex-col justify-center gap-y-8 text-center text-white bg-black rounded-t-3xl -mt-12 px-8 py-16">
  <img src="./assets/logo-test.png" alt="" class="mx-8">
  <a href="mailto:" class="text-2xl text-white font-light">hallo@deep-content.io</a>

  <div class="flex flex-row ">
    <img src="" alt="">
    <img src="" alt="">
  </div>

  <a href="" class="text-white">Impressum</a>
  <a href="" class="text-white">Datenschutz</a>

</footer>

</template>

