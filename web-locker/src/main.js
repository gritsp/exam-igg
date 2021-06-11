import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin)

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://127.0.0.1:3000'),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')