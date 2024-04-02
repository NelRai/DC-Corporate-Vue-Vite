import { ViteSSG } from "vite-ssg";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const _imports_0$2 = "/assets/mixed-magazine-Di2KiSnu.svg";
const _imports_1 = "/assets/decoder-magazine-DVPhxxBf.svg";
const _imports_2 = "/assets/s4g-magazine-BtblXi1n.svg";
const _imports_0$1 = "/assets/Logo_DEEP-CONTENT-Heise_micro-DjZk5JRT.svg";
const _sfc_main$g = {
  __name: "nav-link",
  __ssrInlineRender: true,
  props: {
    text: String,
    link: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.link,
        class: "text-dc-neutral900 text-lg transition-all bg-transparent hover:bg-opacity-40 hover:bg-slate-200 hover:text-black rounded-full py-2 px-3"
      }, _attrs))}>${ssrInterpolate(__props.text)}</a>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/nav-link.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    msg: String
  },
  setup(__props) {
    const hamburger = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header id="navbar" class="${ssrRenderClass([[{ navbarHidden: hamburger.value }], "fixed flex lg:grid px-4 lg:pt-3 lg:px-0 items-center lg:items-end w-full m-auto max-w-7xl left-1/2 z-99 navbar transition-all rounded-b-lg shadow-md backdrop-blur-sm bg-dc-neutral50/70 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"])}"><div class="flex-1 lg:absolute lg:top-0"><div class=""><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="h-auto w-44 lg:w-52 lg:bg-dc-neutral50/80 py-4 lg:p-4 lg:rounded-b-lg lg:shadow-md lg:backdrop-blur-sm"></div></div><div class="${ssrRenderClass([[{ "tham-active": hamburger.value }], "tham tham-e-squeeze tham-w-6 lg:hidden z-99"])}"><div class="tham-box"><div class="tham-inner"></div></div></div><nav class="hidden justify-self-center lg:flex bg-dc-neutral50/80 rounded-full flex-initial justify-center shadow-md backdrop-blur-sm lg:visible"><ul class="flex flex-col lg:h-auto lg:flex-row gap-5 py-3 px-8 justify-start items-start lg:justify-center lg:items-center z-99"><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Über uns",
        link: "#ueber-uns"
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "KI-Agentur",
        link: "#ki-beratung"
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Medienhaus",
        link: "#medienhaus"
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Kontakt",
        link: "#kontakt"
      }, null, _parent));
      _push(`</li></ul></nav><div class="flex-1 justify-center gap-2 text-lg font-normal hidden"><span class="text-dc-400 underline">EN</span><span class="text-dc-neutral900">DE</span></div></header><div class="${ssrRenderClass([[{ hamburgerVisible: hamburger.value }], "hamburgerMenu fixed bg-dc-neutral50/90 flex-initial justify-center shadow-md backdrop-blur-sm lg:hidden z-70"])}"><ul class="flex flex-col w-screen h-screen gap-5 py-3 px-8 pt-32 justify-start items-center"><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Über uns",
        link: "#ueber-uns",
        class: "!text-2xl",
        onClick: ($event) => hamburger.value = !hamburger.value
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "KI-Agentur",
        link: "#ki-beratung",
        class: "!text-2xl",
        onClick: ($event) => hamburger.value = !hamburger.value
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Medienhaus",
        link: "#medienhaus",
        class: "!text-2xl",
        onClick: ($event) => hamburger.value = !hamburger.value
      }, null, _parent));
      _push(`</li><li class="p-0 m-0 h-fit leading-4">`);
      _push(ssrRenderComponent(_sfc_main$g, {
        text: "Kontakt",
        link: "#kontakt",
        class: "!text-2xl",
        onClick: ($event) => hamburger.value = !hamburger.value
      }, null, _parent));
      _push(`</li></ul></div><!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "btn-primary",
  __ssrInlineRender: true,
  props: {
    text: String,
    link: String,
    iconExternal: Boolean
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.link,
        class: "lg:w-max"
      }, _attrs))}><button class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300">${ssrInterpolate(__props.text)}</button></a>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/btn-primary.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "btn-secondary",
  __ssrInlineRender: true,
  props: {
    text: String,
    iconExternal: Boolean
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.link,
        class: "lg:w-max"
      }, _attrs))}><button class="w-full lg:w-max min-h-12 lg:min-h-16 lg:px-12 bg-white text-dc-400 text-base border border-solid border-dc-400 lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:bg-dc-400 hover:text-white hover:-translate-y-1 hover:saturate-150 duration-300">${ssrInterpolate(__props.text)}</button></a>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/btn-secondary.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "headline-h2",
  __ssrInlineRender: true,
  props: {
    headline: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-3xl lg:text-7xl" }, _attrs))}>${ssrInterpolate(__props.headline)}</h2>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/headline-h2.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "Faq",
  __ssrInlineRender: true,
  props: ["faq"],
  emits: ["toggleAnswer"],
  setup(__props, { emit: __emit }) {
    const visibleWorkshop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="faq border-b border-dc-neutral200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"><div class="${ssrRenderClass([[{ open: __props.faq.isOpen }], "header cursor-pointer lg:[&_h3]:hover:text-dc-blue lg:[.workshop-label]:hover:border-dc-blue lg:[&_workshop-label]:hover:text-dc-blue"])}"><span class="workshop-label text-xs border lg:text-sm lg:font-normal border-red-400 text-red-400 rounded-md px-2 py-0.5 transition-all">Workshop 0${ssrInterpolate(__props.faq.id)}</span><div class="flex flex-row gap-x-4 justify-between items-center mt-2"><div class="question"><h3 class="text-lg lg:text-2xl transition-all">${__props.faq.question}</h3></div><div class="${ssrRenderClass(["plus-sphere h-6 w-6 min-w-6 lg:h-10 lg:w-10 lg:min-w-10 flex justify-center items-center bg-red-400 rounded-full", { open: __props.faq.isOpen }])}"><span class="plus-vertical lg:w-0.5 lg:h-4"></span><span class="plus-horizontal lg:w-4 lg:h-0.5"></span></div></div></div><div class="${ssrRenderClass([["answer", { open: __props.faq.isOpen }], "marker:text-dc-400"])}"><p class="text-base lg:text-lg mt-4 mb-4">${__props.faq.answer}</p>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "Jetzt Workshop buchen",
        onClick: ($event) => visibleWorkshop.value = !visibleWorkshop.value
      }, null, _parent));
      _push(`</div></div><div id="modal" style="${ssrRenderStyle(visibleWorkshop.value ? null : { display: "none" })}" class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center"><div class="w-11/12 lg:max-w-md p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99"><form action="" class="flex flex-col gap-12"><h2 class="text-3xl font-light lg:col-span-2">Workshop buchen <br><span class="text-xl text-dc-400 block mt-2 font-normal leading-6">${__props.faq.question}</span></h2><div class="flex flex-col gap-12"><div class="flex flex-row gap-16 text-dc-neutral900"><div class="flex justify-center items-center"><input type="radio" id="workshopChoice1" name="workshopRemote" placeholder="Remote" value="Remote" class="w-6 h-6 mr-2 cursor-pointer" required><label for="workshopChoice1" class="cursor-pointer">Remote</label></div><div class="flex justify-center items-center"><input type="radio" id="workshopChoice2" name="workshopPraesenz" placeholder="Präsenz" value="Präsenz" class="w-6 h-6 mr-2 cursor-pointer" required><label for="workshopChoice2" class="cursor-pointer">Präsenz</label></div></div><div class="flex flex-row gap-4 justify-between"><div class=""><input type="date" id="workshop-date" name="workshop-date" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="time" id="workshop-time" name="workshop-time" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div></div><div class=""><input type="text" id="workshop-name" name="workshop-name" placeholder="Name*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="text" id="workshop-company" name="workshop-company" placeholder="Unternehmen" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900"></div><div class=""><input type="email" id="workshop-mail" name="workshop-mail" placeholder="E-Mail*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required></div></div><input type="submit" class="w-full min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300 cursor-pointer" value="Senden"></form></div><div id="modalBackground" style="${ssrRenderStyle(visibleWorkshop.value ? null : { display: "none" })}" class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30"></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Faq.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "akkordion",
  __ssrInlineRender: true,
  props: {
    deText: String
  },
  setup(__props) {
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
    ];
    const faqs = ref(data);
    const toggleAnswer = (id) => {
      faqs.value = faqs.value.map((faq) => faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq);
      faqs.value = faqs.value.map((faq) => faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq);
    };
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="faqs"><!--[-->`);
      ssrRenderList(faqs.value, (faq) => {
        _push(ssrRenderComponent(_sfc_main$b, {
          key: faq.id,
          faq,
          onToggleAnswer: toggleAnswer
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/akkordion.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "MagazineLinks",
  __ssrInlineRender: true,
  props: {
    deText: String,
    deLink: String,
    dePdfLink: String,
    enText: String,
    enLink: String,
    enPdfLink: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-[auto_1fr_1fr] gap-2 text-sm lg:text-xl" }, _attrs))}><span class="font-normal text-neutral-400">DE</span><a class="text-red-400"${ssrRenderAttr("href", __props.deLink)}>${ssrInterpolate(__props.deText)}</a> <a class="text-black justify-self-end flex items-center gap-2 lg:justify-self-auto"${ssrRenderAttr("href", __props.dePdfLink)}>Mediadaten <span class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5">PDF</span></a><div class="col-span-3 border-b border-solid border-neutral-200"></div><span class="font-normal text-neutral-400">EN</span><a class="text-red-400"${ssrRenderAttr("href", __props.enLink)}>${ssrInterpolate(__props.enText)}</a> <a class="text-black justify-self-end flex items-center gap-2 lg:justify-self-auto"${ssrRenderAttr("href", __props.enPdfLink)}>Mediadaten <span class="text-xs border border-red-400 text-red-400 rounded-md px-2 py-0.5">PDF</span></a></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MagazineLinks.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "logoReel",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    const items = ref([
      "logo_augmentit",
      "logo_bwi",
      "logo_dapr",
      "logo_forwardpublishing",
      "logo_gft",
      "logo_heisemedien",
      "logo_hessianai",
      "logo_jellyfish",
      "logo_netcetera",
      "logo_nmy",
      "logo_ptc",
      "logo_script",
      "logo_sternwald",
      "logo_vrdirect"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="w-full inline-flex flex-nowrap overflow-hidden mt-8"><ul class="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll"><!--[-->`);
      ssrRenderList(items.value, (item) => {
        _push(`<li class=""><img${ssrRenderAttr("src", "" + item + ".svg")} alt="" class="h-8"></li>`);
      });
      _push(`<!--]--></ul><ul class="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-infinite-scroll" aria-hidden="true"><!--[-->`);
      ssrRenderList(items.value, (item) => {
        _push(`<li class=""><img${ssrRenderAttr("src", "" + item + ".svg")} alt="" class="h-8"></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/logoReel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "bg-svg-01",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        id: "svg-circle",
        width: "995",
        height: "995",
        viewBox: "0 0 995 995",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><circle opacity="0.5" cx="497.46" cy="497.46" r="497.46" transform="rotate(-90 497.46 497.46)" fill="url(#paint0_linear_4875_623)"></circle><defs><linearGradient id="paint0_linear_4875_623" x1="497.46" y1="-6.10352e-05" x2="497.46" y2="994.919" gradientUnits="userSpaceOnUse"><stop stop-color="#BECEFF"><animate attributeName="stop-color" values="#FF646F; #BECEFF; #FF646F" dur="6s" repeatCount="indefinite"></animate></stop><stop offset="1" stop-color="#FF646F"><animate attributeName="stop-color" values="#BECEFF; #FF646F; #BECEFF" dur="6s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bg-svg-01.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "bg-svg-01b",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        id: "svg-rectangle",
        width: "995",
        height: "665",
        viewBox: "0 0 995 665",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path opacity="0.5" d="M994.919 0L994.919 632.073C994.919 649.746 980.593 664.073 962.919 664.073L-0.000151098 664.073L-0.000123469 32C-0.000122697 14.3269 14.3268 -4.28631e-05 31.9999 -4.20906e-05L994.919 0Z" fill="url(#paint0_linear_4875_624)"></path><defs><linearGradient id="paint0_linear_4875_624" x1="994.919" y1="332.037" x2="-0.000136584" y2="332.037" gradientUnits="userSpaceOnUse"><stop stop-color="#FF646F"><animate attributeName="stop-color" values="#FF646F; #BECEFF; #FF646F" dur="6s" repeatCount="indefinite"></animate></stop><stop offset="1" stop-color="#BECEFF"><animate attributeName="stop-color" values="#BECEFF; #FF646F; #BECEFF" dur="6s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bg-svg-01b.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "hero-bg-animation",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 w-full h-full -z-10 overflow-hidden" }, _attrs))}><svg class="w-lvw h-lvh" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="dc-400" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 100, 111, 1)"></stop><stop offset="100%" stop-color="rgba(255, 100, 111, 0)"></stop></radialGradient><radialGradient id="td-200" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(190, 206, 255, 1)"></stop><stop offset="100%" stop-color="rgba(190, 206, 255, 0)"></stop></radialGradient><radialGradient id="neutral-50" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(252, 252, 251, 1)"></stop><stop offset="100%" stop-color="rgba(252, 252, 251, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#dc-400)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#td-200)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="112s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#neutral-50)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"></animateTransform></rect></svg></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/hero-bg-animation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "contact",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "kontakt",
        class: "-mt-12 px-8 pt-16 pb-24 w-full bg-white border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-60 relative"
      }, _attrs))}><div class="max-w-7xl m-auto"><form action="" class="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:grid-row-5 lg:gap-16"><h2 class="text-3xl lg:text-7xl lg:col-span-2">Kontakt</h2><div class="flex flex-col gap-12"><div class=""><input type="text" id="fname" name="fname" placeholder="Name*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="text" id="fcompany" name="fcompany" placeholder="Unternehmen" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900"></div><div class=""><input type="email" id="fmail" name="fmail" placeholder="E-Mail*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required></div></div><div class=""><textarea type="text" id="fmsg" name="fmsg" placeholder="Nachricht*" class="w-full lg:h-full border-b border-solid border-dc-400 min-h-32 placeholder:align-top placeholder:text-dc-neutral900"></textarea></div><input type="submit" class="w-full lg:w-max font-normal min-h-12 lg:min-h-16 lg:px-12 bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300 cursor-pointer" value="Senden"></form></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "/assets/Logo_DEEP-CONTENT-Heise_micro_light-DsSNBWYz.svg";
const _sfc_main$3 = {
  __name: "icon-twitter",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, _attrs))}><path fill="#FFF" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path></svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icon-twitter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "icon-linkedIn",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, _attrs))}><path fill="#FFF" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icon-linkedIn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "footer",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full justify-center gap-y-8 lg:gap-y-16 text-center text-white bg-black rounded-t-3xl lg:rounded-t-4xl -mt-12 px-8 py-16 z-70 relative" }, _attrs))}><div class="flex flex-col lg:flex-row gap-y-8 lg:justify-between lg:items-center lg:w-full max-w-7xl lg:m-auto"><img${ssrRenderAttr("src", _imports_0)} alt="" class="mx-8 w-56 lg:w-80 lg:mx-0 lg:min-w-80"><a href="mailto:" class="text-3xl lg:text-5xl text-white font-light">hallo@deep-content.io</a></div><div class="flex flex-col lg:flex-row-reverse gap-8 lg:pt-8 lg:justify-between lg:border-t lg:w-full lg:items-end max-w-7xl lg:m-auto lg:border-t-neutral-500"><div class="flex flex-row justify-center gap-4"><a href="" class="bg-dc-400 rounded-full p-5 h-16 w-16 lg:h-10 lg:w-10 lg:p-3 ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</a><a href="" class="bg-dc-400 rounded-full p-5 h-16 w-16 lg:h-10 lg:w-10 lg:p-3 ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</a></div><div class="text-xl flex flex-col lg:flex-row gap-8"><a href="/impressum.html" class="text-white font-light">Impressum</a><a href="" class="text-white font-light">Datenschutz</a></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const visibleBeratung = ref(false);
    const visibleDemo = ref(false);
    const visibleWorkshop = ref(false);
    ref(false);
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("navbar--hidden");
      } else {
        document.getElementById("navbar").classList.add("navbar--hidden");
      }
      prevScrollpos = currentScrollPos;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(`<div class="flex flex-col gap-8 pt-32 pb-28 lg:pt-44 lg:pb-28 lg:gap-32"><div class="flex flex-col gap-2 lg:gap-8 text-center lg:text-left w-full max-w-7xl m-auto"><h1 class="font-blinker font-light text-3xl lg:text-[7rem] lg:leading-[7rem]"> Neues Denken.<br>Neue Kompetenzen. </h1><p class="text-base lg:text-3xl font-blinker"> Medienhaus &amp; KI-zentrierte Agentur </p></div><div class="flex flex-wrap justify-center gap-3 mx-10 lg:mx-0">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "KI-Beratung",
        link: "#ki-beratung"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "KI-Workshops",
        link: "#ki-workshops"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "KI-Software",
        link: "#ki-software"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div id="ueber-uns" class="flex flex-col gap-4 lg:gap-32 -mt-12 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-10 relative"><div class="px-8 lg:px-0 max-w-7xl m-auto flex flex-col gap-4 lg:gap-16"><p class="text-1xl lg:text-7xl"><span class="text-dc-400">Deep Content by heise</span> ist ein digitales Medienhaus mit jahrelanger journalistischer Tech-Expertise. </p><p class="lg:text-4xl"> Journalist:innen und Kommunikationsprofis arbeiten hier erfolgreich mit generativer KI. Unsere Agentur-Leistungen umfassen etwa Beratung zu KI im Unternehmen, sorgfältig abgestimmte Workshops, individuelle Beratung, etwa rund um Prompting, sowie das Profi-Workflow-Tool DC I/O. </p></div>`);
      _push(ssrRenderComponent(_sfc_main$8, { class: "mt-4" }, null, _parent));
      _push(`</div><div id="ki-beratung" class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 relative overflow-hidden z-20"><div class="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-16"><div class="flex flex-col gap-8 lg:gap-16">`);
      _push(ssrRenderComponent(_sfc_main$c, { headline: "KI-Beratung" }, null, _parent));
      _push(`<p> Zuerst muss man verstehen, was da eigentlich gerade mit KI passiert – und in welcher Geschwindigkeit. Dann stellt sich die wichtigste aller Fragen: Wie bekomme ich generative KI sinnvoll in meine Prozesse integriert? Wie sichere ich die Qualität? Und wie behalte ich die Kontrolle über die Anwendung von KI im Unternehmen? <br><br> Unsere langjährige Erfahrung mit KI im Journalismus und in der Unternehmenskommunikation liefert die perfekte Grundlage für eine effektive Beratung. Sprechen Sie uns gern an. </p>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "Jetzt Beratungstermin vereinbaren",
        onClick: ($event) => visibleBeratung.value = !visibleBeratung.value
      }, null, _parent));
      _push(`</div></div><div id="circle" class="w-1/2 absolute right-0 -bottom-1/4 opacity-30">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div></div><div id="ki-workshops" class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 overflow-hidden z-30 relative"><div class="max-w-7xl m-auto flex flex-col gap-8">`);
      _push(ssrRenderComponent(_sfc_main$c, { headline: "KI-Workshops" }, null, _parent));
      _push(`<div class="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16"><p> Sie möchten Ihre Mitarbeitenden auf den aktuellen Stand der Dinge bringen? Lernen Sie, was KI kann, was nicht, wie man damit umgeht und sinnvolle Anwendungsbereiche evaluiert, in denen Effizienz- und Qualitätsgewinne zu holen sind. Unsere beliebten Workshops lassen Sie nicht nur mitreden – sie wissen danach auch genau, was zu tun ist. </p>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div></div></div><div id="ki-software" class="-mt-12 px-8 pt-16 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 overflow-hidden z-40 relative"><div class="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-16"><div class="flex flex-col gap-8 lg:gap-16">`);
      _push(ssrRenderComponent(_sfc_main$c, { headline: "KI-Software" }, null, _parent));
      _push(`<p> DC I/O ist die Unternehmenslösung für anpassbare, zuverlässige und transparente Content-Workflows mit generativer KI. Entwickelt von Content-Profis für Content-Profis. <br><br> Mit einer geteilten Prompt-Bibliothek können Teams in Sekunden neue Inhalte aus bestehenden Quellen generieren und generative KI exakt auf ihre individuellen Workflows abstimmen. <br><br>Integrieren Sie eigene Vektordatenbanken und nutzen Sie die Recherche-Superpower generativer KI für neue Inhalte. Wählen Sie aus den besten KI-Modellen oder binden Sie lokale Modelle für höchsten Datenschutz an. <br><br> Ob Marketingabteilung mit drei Personen oder Redaktion mit 200 Autorinnen und Autoren: DC I/O macht Ihre Inhaltsproduktion mit KI zukunftssicher. </p><div class="flex flex-col gap-3 lg:flex-row lg:gap-5">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "Mehr über DC I/O",
        iconExternal: "",
        class: "w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        text: "Jetzt Demo buchen",
        class: "w-full",
        onClick: ($event) => visibleDemo.value = !visibleDemo.value
      }, null, _parent));
      _push(`</div></div></div></div><div id="medienhaus" class="flex flex-col gap-16 -mt-12 px-8 pt-8 pb-24 w-full bg-dc-neutral50 border border-neutral-300 border-solid rounded-t-3xl lg:rounded-t-4xl shadow-top3xl lg:pt-32 lg:pb-44 z-50 relative"><article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row lg:gap-16"><img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images"${ssrRenderAttr("src", _imports_0$2)} alt=""><div class="flex flex-col gap-8"><p><span class="text-dc-400">MIXED</span> ist in Deutschland, Österreich und der Schweiz Marktführer für News und Berichte rund um Zukunfts-Technologien wie VR, AR, KI und mehr. Bei uns trifft sich auch die deutschsprachige Mixed-Reality-Community. Bekannte Nachrichtenseiten wie Spiegel Online, TAZ, BILD, Golem, Manager Magazin, Venturebeat, Techcrunch, Road to VR und viele mehr verlinken auf unsere Artikel. </p>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        deText: "mixed.de",
        deLink: "https://mixed.de/",
        dePdfLink: "https://deep-content.io/",
        enText: "mixed-news.com",
        enLink: "https://mixed-news.com/en/",
        enPdfLink: "https://deep-content.io/"
      }, null, _parent));
      _push(`</div></article><article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:flex-row-reverse lg:gap-16"><img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images"${ssrRenderAttr("src", _imports_1)} alt=""><div class="flex flex-col gap-8"><p><span class="text-dc-400">THE DECODER</span> ist eine internationale digitale Publikations-, Wissens- und Business-Plattform, die KI-Wissenschaft, Politik und Wirtschaft miteinander verbindet. Unsere Berichterstattung ist aktuell, sachlich, tiefgründig und dennoch unterhaltsam. Wir jagen keinem Hype hinterher. Wir legen Wert auf echte Relevanz. </p>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        deText: "the-decoder.de",
        deLink: "https://the-decoder.de/",
        dePdfLink: "https://deep-content.io/",
        enText: "the-decoder.com",
        enLink: "https://the-decoder.com/",
        enPdfLink: "https://deep-content.io/"
      }, null, _parent));
      _push(`</div></article><article class="flex flex-col gap-8 max-w-7xl m-auto lg:*:w-1/2 lg:gap-16 lg:flex-row"><img class="w-full h-full shadow-lg rounded-3xl lg:rounded-images"${ssrRenderAttr("src", _imports_2)} alt=""><div class="flex flex-col gap-8"><p><span class="text-dc-400">SPACE4GAMES</span> beschäftigt sich ausführlich und detailliert mit Videospielen und weiteren Tech-Themen, die unsere Autoren begeistern. Vom Report über die besten Guides und Top-Tools bis hin zu starken Meinungen. Die Artikel erscheinen auch in englischer Sprache für maximale Reichweite. </p>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        deText: "space4games.com",
        deLink: "https://space4games.com/de/",
        dePdfLink: "https://deep-content.io/",
        enText: "space4games.com/en/",
        enLink: "https://space4games.com/en/",
        enPdfLink: "https://deep-content.io/"
      }, null, _parent));
      _push(`</div></article></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div id="modal" style="${ssrRenderStyle(visibleBeratung.value ? null : { display: "none" })}" class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center"><div class="w-11/12 lg:max-w-md p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99"><form action="" class="flex flex-col gap-12"><h2 class="text-3xl font-light lg:col-span-2">Jetzt Beratungstermin vereinbaren </h2><div class="flex flex-col gap-12"><div class="flex flex-row gap-16 text-dc-neutral900"><div class="flex justify-center items-center"><input type="radio" id="beratungChoice1" name="beratung-remote" placeholder="Präsenz" value="Präsenz" class="w-6 h-6 mr-2 cursor-pointer" required><label for="beratungChoice1" class="cursor-pointer">Remote</label></div><div class="flex justify-center items-center"><input type="radio" id="beratungChoice2" name="beratung-praesenz" placeholder="Präsenz" value="Präsenz" class="w-6 h-6 mr-2 cursor-pointer" required><label for="beratungChoice2" class="cursor-pointer">Präsenz</label></div></div><div class="flex flex-row gap-4 justify-between"><div class=""><input type="date" id="beratung-date" name="beratung-date" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="time" id="beratung-time" name="beratung-time" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div></div><div class=""><input type="text" id="beratung-name" name="beratung-name" placeholder="Name*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="text" id="beratung-company" name="beratung-company" placeholder="Unternehmen" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900"></div><div class=""><input type="email" id="beratung-mail" name="beratung-mail" placeholder="E-Mail*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required></div></div><input type="submit" class="w-full min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300 cursor-pointer" value="Senden"></form></div><div id="modalBackground" style="${ssrRenderStyle(visibleBeratung.value ? null : { display: "none" })}" class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30"></div></div><div id="modal" style="${ssrRenderStyle(visibleDemo.value ? null : { display: "none" })}" class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center"><div class="w-11/12 lg:max-w-md p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99"><form action="" class="flex flex-col gap-12"><h2 class="text-3xl font-light lg:col-span-2">Jetzt remote Demotermin vereinbaren</h2><div class="flex flex-col gap-12"><div class="flex flex-row gap-4 justify-between"><div class=""><input type="date" id="demo-date" name="demo-date" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="time" id="demo-time" name="demo-time" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div></div><div class=""><input type="text" id="demo-name" name="demo-name" placeholder="Name*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="text" id="demo-company" name="demo-company" placeholder="Unternehmen" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900"></div><div class=""><input type="email" id="demo-mail" name="demo-mail" placeholder="E-Mail*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required></div></div><input type="submit" class="w-full min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300 cursor-pointer" value="Senden"></form></div><div id="modalBackground" style="${ssrRenderStyle(visibleDemo.value ? null : { display: "none" })}" class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30"></div></div><div id="modal" style="${ssrRenderStyle(visibleWorkshop.value ? null : { display: "none" })}" class="w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 fixed flex justify-center items-center"><div class="w-11/12 lg:max-w-md p-8 bg-white border border-neutral-300 border-solid rounded-2xl shadow-top3xl z-99"><form action="" class="flex flex-col gap-12"><h2 class="text-3xl font-light lg:col-span-2">Jetzt Workshop buchen</h2><div class="flex flex-col gap-12"><div class="flex flex-row gap-16 text-dc-neutral900"><div class="flex justify-center items-center"><input type="radio" id="workshopChoice1" name="workshopRemote" placeholder="Remote" value="Remote" class="w-6 h-6 mr-2 cursor-pointer" required><label for="workshopChoice1" class="cursor-pointer">Remote</label></div><div class="flex justify-center items-center"><input type="radio" id="workshopChoice2" name="workshopPraesenz" placeholder="Präsenz" value="Präsenz" class="w-6 h-6 mr-2 cursor-pointer" required><label for="workshopChoice2" class="cursor-pointer">Präsenz</label></div></div><div class="flex flex-row gap-4 justify-between"><div class=""><input type="date" id="workshop-date" name="workshop-date" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="time" id="workshop-time" name="workshop-time" placeholder="TT/MM/JJJJ*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div></div><div class=""><input type="text" id="workshop-name" name="workshop-name" placeholder="Name*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required><br></div><div class=""><input type="text" id="workshop-company" name="workshop-company" placeholder="Unternehmen" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900"></div><div class=""><input type="email" id="workshop-mail" name="workshop-mail" placeholder="E-Mail*" class="w-full border-b border-solid border-dc-400 placeholder:text-dc-neutral900" required></div></div><input type="submit" class="w-full min-h-12 lg:min-h-16 lg:px-12 font-normal bg-gradient-to-b from-dc-400 to-dc-500 text-white text-base lg:text-lg rounded-3xl lg:rounded-full background btn primary transition-all relative top-0 hover:drop-shadow-xl ease-in-out hover:-translate-y-1 hover:saturate-150 duration-300 cursor-pointer" value="Senden"></form></div><div id="modalBackground" style="${ssrRenderStyle(visibleWorkshop.value ? null : { display: "none" })}" class="cursor-pointer w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-70 fixed flex justify-center items-center bg-opacity-30"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createApp = ViteSSG(
  // the root component
  _sfc_main,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
  }
);
export {
  createApp
};
