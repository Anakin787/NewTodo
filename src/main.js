// 각 파일에서 export한것을 import해서 사용
// create{}형식을 사용하여 플러그인 함수 생성
import { createApp } from 'vue'
import App from './App.vue' // root로 사용할 vue파일
import router from './router'
import store from './store'
import vuetify from "./vuetify"
import 'material-design-icons-iconfont/dist/material-design-icons.css'


// plugin은 .use()를 통해서 사용
createApp(App).use(store).use(router).use(vuetify).mount('#app')