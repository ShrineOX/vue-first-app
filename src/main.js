import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretRight,
  faEllipsisH,
  faLongArrowAltLeft,
  faPlusCircle,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faQuestionCircle,
  faLongArrowAltLeft,
  faCaretRight,
  faEllipsisH,
  faPlusCircle
);

createApp(App)
  .use(router)
  .component('font-icon', FontAwesomeIcon)
  .mount('#app');
