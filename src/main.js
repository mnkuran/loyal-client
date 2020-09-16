import Vue from "vue";

import firebase from "firebase/app";
import "firebase/auth";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDyQfcwJW6I06tif06sEsrq-TAUxW8--9c",
  authDomain: "kuran-loyal.firebaseapp.com",
  databaseURL: "https://kuran-loyal.firebaseio.com",
  projectId: "kuran-loyal",
  storageBucket: "kuran-loyal.appspot.com",
  messagingSenderId: "1076892292545",
  appId: "1:1076892292545:web:645ffd66f4902154914b40"
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
