import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import plugins from './plugins';

const myApp = createApp(App);
myApp.use(router);
myApp.use(plugins);
myApp.mount('#app');