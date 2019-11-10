import { Vue as _Vue } from 'vue/types/vue';

declare global {
  interface Window {
    Vue?: typeof _Vue;
  }
}
declare module NodeJS  {
  interface Global {
    Vue?: typeof _Vue;
  }
}
