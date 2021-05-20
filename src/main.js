import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';
import axios from 'axios';

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

// Create a new store instance.
const store = createStore({
  state: {
    data: []
  },
  getters: {
    allData: state => state.data
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await axios.get(
          'https://mocki.io/v1/af96501c-cf82-4c55-bc0f-39253de660f4'
        );
        commit('setData', res.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    setData: (state, data) => (state.data = data)
  }
});

createApp(App)
  .use(router)
  .use(store)
  .component('font-icon', FontAwesomeIcon)
  .mount('#app');
