import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgList: []
  },
  mutations: {
    SET_LIST_IMG: (state, payload) =>{
      state.imgList = payload;
    }
  }
});
