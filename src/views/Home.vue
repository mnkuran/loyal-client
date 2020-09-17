<template>
  <div>
    <h2>Home</h2>
    <login-display />
    <button @click="logout">Logout</button>
    <div v-for="customer in customers" :key="customer.id">
      <h3>{{ customer.name }}</h3>
      <p>{{ customer.id }}</p>
      <p>
        <strong>Points: </strong><span>{{ customer.points }}</span>
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import LoginDisplay from "../components/LoginDisplay";

export default {
  data() {
    return {
      customers: [],
    };
  },
  components: {
    LoginDisplay,
  },
  methods: {
    async logout() {
      try {
        await auth.signOut();
        this.$router.push({ name: "Login" });
      } catch (error) {
        alert(error);
      }
    },
  },
  firestore: {
    customers: db
      .collection("users")
      .doc("lUw28EDnFUOscJSlttpDC8SH5Yy1")
      .collection("customers"),
  },
};
</script>
