import Vue from 'vue'
import Demo from '@/demo.vue'
import { router } from '@/router'
import VueFeatherIcon from 'vue-feather-icon';

Vue.config.productionTip = false;

Vue.use(VueFeatherIcon);

new Vue({
  router,
  render: h => h(Demo)
}).$mount('#app');
