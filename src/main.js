import Vue from "vue";

import { firestorePlugin } from "vuefire";

import { auth } from "./firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

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
