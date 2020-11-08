import { createApp } from 'vue'
import App from './App.vue'
import { init, config, Enum, disabled } from "../../lib";
init({prefix: '--->', unHello: false, disabled: false})
// config(Enum.Level.INFO, { prefix: '--->'})

createApp(App).mount('#app')
