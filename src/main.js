import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import services from './services';

const app = createApp(App);
app.provide('services', services);
app.mount('#app');