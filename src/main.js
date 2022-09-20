import { createApp } from 'vue'
import Maska from 'maska'
import App from './App.vue'
import moment from 'moment';

// createApp(App).mount('#app')

const app = createApp(App);

//quando a lib js for um plugin do VUE utilizar a abordar 'use'
app.use(Maska);

//quando a lib js, é uma lib somente js, utilizar em forma de propriedade global
app.config.globalProperties.$moment = moment
app.config.globalProperties.$moment.locale('pt-br');
app.mount('#app')
