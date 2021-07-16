import character from './character'
import { createLogger, createStore } from 'vuex'
// Create a new store instance.
/*
const customers = {
    state: {a:"my string"}
}
*/
export default createStore({
  modules: {
    character
  },
  plugins:[createLogger()]
})




/*
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import character from './character'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'ilume-vuex',
  storage: window.localStorage,

  reducer: (state) => ({
    //return an object
  })  

});

export default new Vuex.Store({
  modules: {
   character
  },
  plugins: [vuexLocal.plugin]
});
*/