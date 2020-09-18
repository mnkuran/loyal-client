<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <login-display />
          </div>
          <div class="level-right">
            <b-button @click="logout">Logout</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <b-input size="is-large"></b-input>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div v-for="customer in customers" :key="customer.id" class="box">
          <CustomerBox :customer="customer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import LoginDisplay from "../components/LoginDisplay";
import CustomerBox from "../components/CustomerBox";

export default {
  data() {
    return {
      customers: [],
    };
  },
  components: {
    LoginDisplay,
    CustomerBox
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
