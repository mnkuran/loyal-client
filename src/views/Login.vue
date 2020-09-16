<template>
  <div>
    <h2>Login</h2>
    <button @click="login">Sign in with Google</button>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
