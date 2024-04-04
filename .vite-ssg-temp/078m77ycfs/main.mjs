import { ViteSSG } from "vite-ssg";
import { ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    if (typeof window !== "undefined") {
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
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
