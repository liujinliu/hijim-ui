import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EnLang from '@/assets/i18n/lang/en'
import ZhLang from '@/assets/i18n/lang/zh'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.use(VueRouter)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': ZhLang,
    'en': EnLang
  }
})

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
