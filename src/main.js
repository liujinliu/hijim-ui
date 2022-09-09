import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EnLang from '@/assets/i18n/lang/en'
import ZhLang from '@/assets/i18n/lang/zh'

Vue.use(ElementUI);

Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': ZhLang,
    'en': EnLang
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  i18n
}).$mount('#app')
