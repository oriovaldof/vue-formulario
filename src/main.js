import { createApp } from 'vue'
import Maska from 'maska'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App);

app.use(Maska);

app.mount('#app')
