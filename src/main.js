import Vue from "vue";

import { firestorePlugin } from "vuefire";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { auth } from "./firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(Buefy);

let app;
auth.onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
