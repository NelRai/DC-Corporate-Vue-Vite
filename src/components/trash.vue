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
