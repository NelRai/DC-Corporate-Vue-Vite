  <!-- <HelloWorld asd="Vite + Vue ggg" /> -->
  <!-- <WrapperContent headline="KI-Beratung" :style="{'z-index': '1'}" />
  <WrapperContent headline="KI-Workshops" :style="{'z-index': '2'}" />
  <WrapperContent headline="KI-Software" :style="{'z-index': '3'}" /> -->

<!-- <section
    class="flex flex-col gap-16 -mt-12 px-8 pt-8 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl"
  >
    <article class="flex flex-col gap-8">
      <img class="w-full" src="./assets/mixed-image.jpg" alt="" />
      <p>
        <span class="text-red-400">MIXED</span> ist in Deutschland, Österreich
        und der Schweiz Marktführer für News und Berichte rund um
        Zukunfts-Technologien wie VR, AR, KI und mehr. Bei uns trifft sich auch
        die deutschsprachige Mixed-Reality-Community. Bekannte Nachrichtenseiten
        wie Spiegel Online, TAZ, BILD, Golem, Manager Magazin, Venturebeat,
        Techcrunch, Road to VR und viele mehr verlinken auf unsere Artikel.
      </p>
      <MagazineLinks
        deText="mixed.de"
        deLink="https://mixed.de/"
        dePdfLink="https://deep-content.io/"
        enText="mixed-news.com"
        enLink="https://mixed-news.com/en/"
        enPdfLink="https://deep-content.io/"
      />
    </article>

    <article class="flex flex-col gap-8">
      <img class="w-full" src="./assets/s4g-image.png" alt="" />
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
    </article>

    <article class="flex flex-col gap-8">
      <img class="w-full" src="./assets/decoder-image.png" alt="" />
      <p>
        <span class="text-red-400">THE DECODER</span> ist eine internationale
        digitale Publikations-, Wissens- und Business-Plattform, die
        KI-Wissenschaft, Politik und Wirtschaft miteinander verbindet. Unsere
        Berichterstattung ist aktuell, sachlich, tiefgründig und dennoch
        unterhaltsam. Wir jagen keinem Hype hinterher. Wir legen Wert auf echte
        Relevanz.
      </p>
      <MagazineLinks
        deText="the-decoder.de"
        deLink="https://the-decoder.de/"
        dePdfLink="https://deep-content.io/"
        enText="the-decoder.com"
        enLink="https://the-decoder.com/"
        enPdfLink="https://deep-content.io/"
      />
    </article>
  </section> -->

  <section
    class="-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl"
  >
    <form action="" class="flex flex-col gap-12">
      <h2 class="text-3xl">Schreib uns einfach.</h2>

      <div>
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

      <div>
        <!-- <label for="lcompany">Unternehmen</label><br> -->
        <input
          type="text"
          id="lcompany"
          name="lcompany"
          placeholder="Unternehmen"
          class="w-full border-b border-solid border-red-400 placeholder:text-black"
        />
      </div>
      <div>
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
      <div>
        <!-- <label for="lmsg">Nachricht*</label><br> -->
        <textarea
          type="text"
          id="lmsg"
          name="lmsg"
          placeholder="Nachricht*"
          class="w-full border-b border-solid border-red-400 min-h-32 placeholder:align-top placeholder:text-black"
        ></textarea>
      </div>

      <input
        type="submit"
        class="min-h-12 bg-red-400 text-white rounded-3xl background btn primary"
      />
    </form>
  </section>

  <!-- akorrdeon -->

  <!-- <div class="border-b border-neutral-400 pb-4">
    <span
      class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5"
      >Workshop 01</span
    >

    <div class="flex flex-row gap-x-4 justify-center items-center mt-2">
      <div>
        <h3 class="text-lg">{{ faq.question }}</h3>

        <p class="mt-4 text-base">
          {{ faq.answer }}
        </p>
      </div>

      <div
        class="h-6 w-6 flex justify-center items-center bg-red-400 rounded-full text-xl text-white"
      >
        +
      </div>
    </div>
  </div> -->

  <div id="modal"     @click="visible = !visible" :class="[ { test: visible }]"


<header id="navbar" class="fixed flex lg:grid px-4 lg:pt-3 lg:px-0 items-center lg:items-end w-full m-auto max-w-7xl left-1/2 z-99 navbar transition-all rounded-b-lg shadow-md backdrop-blur-sm bg-dc-neutral50/70 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"  :class="[ { navbarHidden: hamburger }]"    >
      
    <div class="flex-1 lg:absolute lg:top-0">
      <div class="">
        <img src="./assets/Logo_DEEP-CONTENT-Heise_micro.svg" alt=""
          class="h-auto w-44 lg:w-52 lg:bg-dc-neutral50/80  py-4 lg:p-4 lg:rounded-b-lg lg:shadow-md lg:backdrop-blur-sm" />
      </div>
    </div>


    <div class="tham tham-e-squeeze tham-w-6 lg:hidden z-99" @click="hamburger = !hamburger" :class="[ { test: hamburger }]" >
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>


    <nav class="hidden justify-self-center lg:flex bg-dc-neutral50/80 rounded-full flex-initial justify-center shadow-md backdrop-blur-sm  lg:visible">
      <ul class="flex flex-col lg:h-auto lg:flex-row gap-5 py-3 px-8 justify-start items-start lg:justify-center lg:items-center z-99">
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="Über uns" link="#ueber-uns" />
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="KI-Agentur" link="#ki-beratung" />
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="Medienhaus" link="#medienhaus" />
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="Kontakt" link="#kontakt" />
        </li>
      </ul>
    </nav>
    <div class="flex-1 justify-center gap-2 text-lg font-normal hidden">
      <span class="text-dc-400 underline">EN</span>
      <span class="text-dc-neutral900">DE</span>
    </div>
  </header>



  <div class="hamburgerMenu fixed bg-dc-neutral50/90 flex-initial justify-center shadow-md backdrop-blur-sm lg:hidden z-70" :class="[ { hamburgerVisible: hamburger }]" >

      <ul class="flex flex-col    w-screen h-screen  gap-5 py-3 px-8 pt-32 justify-start items-center">
        <li class="p-0 m-0 h-fit leading-4 ">
          <navLink text="Über uns" link="#ueber-uns" class="!text-2xl"  @click="hamburger = !hamburger"/>
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="KI-Agentur" link="#ki-beratung" class="!text-2xl" @click="hamburger = !hamburger" />
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="Medienhaus" link="#medienhaus" class="!text-2xl"  @click="hamburger = !hamburger"/>
        </li>
        <li class="p-0 m-0 h-fit leading-4">
          <navLink text="Kontakt" link="#kontakt" class="!text-2xl"  @click="hamburger = !hamburger"/>
        </li>
      </ul>
    </div> 
