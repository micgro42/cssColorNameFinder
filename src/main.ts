import { createApp } from 'vue';
import App from './App.vue';
// @ts-expect-error TS2882
import './styles/global.scss';

createApp(App).mount('#app');
