import Vue from 'vue';
import Vuex from 'vuex';

import App from './components/App.vue';

Vue.use(Vuex);


const mutations = {
  ADD_MESSAGE: 'addMessage'
};

/**
 * Working with DB
 */
import api from './api';

let store = new Vuex.Store({
  state: {
    name: 'Telegram',
    currentChat: null,
    chats: [
      {
        name: 'Valery Guryn',
        photo: 'https://qph.fs.quoracdn.net/main-thumb-26909336-50-smavgtqpbdymcwtgmdlazxitpopsdstv.jpeg',
        messages: []
      },
      {
        name: 'The second chat',
        photo: 'https://qph.fs.quoracdn.net/main-thumb-176696321-50-tsumifsiixbvrnmeevzlfvsemhtnclhu.jpeg',
        messages: [],
      },
      {
        name: 'Pavel Durov',
        photo: 'https://pp.userapi.com/c636621/v636621707/44928/qMw3ACX9Dw0.jpg',
        messages: []
      }
    ],
  },
  actions: {
    sendMessage({commit, state}, value){
      api.sendMessage(value).then(function(){
        commit('addMessage', {
          chatId: state.currentChat,
          text: value
        });
      });
    }
  },
  mutations: {
    addMessage(state, {chatId, text}){
      state.chats[chatId].messages.push(text);
    },

    setCurrentChat(state, index){
      state.currentChat = index;
    }
  },
  getters: {}

});


window.app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {
    App
  }
});
