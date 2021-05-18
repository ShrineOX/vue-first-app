import { createRouter, createWebHistory } from 'vue-router';

import Manager from '../views/Manager';
import DigitalEdition from '../views/DigitalEdition';
import PrintedEdidtion from '../views/PrintedEdidtion';

const routes = [
  { path: '/', redirect: { name: 'Manager' } },
  { path: '/manager', component: PrintedEdidtion, name: 'Manager' },
  { path: '/printed-edition', component: Manager, name: 'PrintedEdition' },
  {
    path: '/digital-edition',
    component: DigitalEdition,
    name: 'DigitalEdition'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
