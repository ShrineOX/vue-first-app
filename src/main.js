import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLongArrowAltLeft,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faQuestionCircle, faLongArrowAltLeft);

createApp(App)
  .use(router)
  .component('font-icon', FontAwesomeIcon)
  .mount('#app');
