<template>
  <div>
    <h2>Home</h2>
    <login-display />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { auth } from "../firebase";
import LoginDisplay from "../components/LoginDisplay";

export default {
  components: {
    LoginDisplay
  },
  methods: {
    async logout() {
      try {
        await auth.signOut();
        this.$router.push({ name: "Login" });
      } catch(error) {
        alert(error);
      }
    }
  }
}
</script>
