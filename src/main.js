import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import todoStroe from './store/todo';

import 'normalize-css';

createApp(App).use(router).provide('todo', todoStroe()).mount('#app');
