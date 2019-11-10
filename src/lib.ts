import { VueFeatherIcon } from './lib/index';
import { Vue as _Vue } from 'vue/types/vue'
import featherSprite from 'feather-icons/dist/feather-sprite.svg';

let installed = false;
function install(Vue: typeof _Vue) {
  if (installed) return;
  installed = true;
  // Add sprite sheet to body
  if (document !== undefined) {
    document.body.innerHTML += featherSprite;
  }
  // Register Component
  Vue.component('vue-feather-icon', VueFeatherIcon);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // @ts-ignore
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export * from './lib/index';
