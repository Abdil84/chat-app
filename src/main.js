import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css'
import { projectAuth } from './Firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})


