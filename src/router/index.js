import { createRouter, createWebHistory } from 'vue-router';

import Manager from '../views/Manager';
import DigitalEdition from '../views/DigitalEdition';
import PrintedEdidtion from '../views/PrintedEdidtion';

import catagory from '../constant';

const routes = [
  { path: '/', redirect: { name: catagory.MANAGER } },
  { path: '/manager', component: Manager, name: catagory.MANAGER },
  {
    path: '/printed-edition',
    component: PrintedEdidtion,
    name: catagory.PRINTED_EDITION
  },
  {
    path: '/digital-edition',
    component: DigitalEdition,
    name: catagory.DIGITAL_EDITION
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
