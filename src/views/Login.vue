<template>
  <div class="section">
    <div class="container">
      <b-button @click="login">Sign in with Google</b-button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

import { auth } from "../firebase";

export default {
  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await auth.signInWithPopup(provider);
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
