//import Vue from 'vue'
import { createApp } from 'vue'
import  store  from './store'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.mount('#app')


/*
new Vue({
    store,
    render: (h) => h(App)
  }).$mount('#app');

  */
  //mount().catch(() => {});
