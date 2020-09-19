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
        <div class="mb-4">
          <b-input v-model="searchText" size="is-large"></b-input>
        </div>
        <div v-if="searchText && !isExactId" class="box">
          <p>New Customer</p>
          <br />
          <b-button class="is-primary" @click="isAddCustomerModalActive = true"
            >Create new customer</b-button
          >
        </div>
        <div
          v-for="customer in filteredCustomers"
          :key="customer.id"
          class="box"
        >
          <customer-box :customer="customer" />
        </div>
      </div>
    </div>
    <b-modal :active.sync="isAddCustomerModalActive" has-modal-card trap-focus>
      <add-customer-modal :searchText="searchText" />
    </b-modal>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import LoginDisplay from "../components/LoginDisplay";
import CustomerBox from "../components/CustomerBox";
import AddCustomerModal from "../components/AddCustomerModal";

export default {
  components: {
    LoginDisplay,
    CustomerBox,
    AddCustomerModal
  },
  data() {
    return {
      customers: [],
      searchText: "",
      isAddCustomerModalActive: false
    };
  },
  computed: {
    filteredCustomers() {
      if (this.searchText === "") return this.customers;
      return this.customers.filter(customer => {
        return (
          customer.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          customer.id.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    },
    isExactId() {
      if (
        this.filteredCustomers.length == 1 &&
        this.filteredCustomers[0].id === this.searchText
      )
        return true;
      return false;
    }
  },
  methods: {
    async logout() {
      try {
        await auth.signOut();
        this.$router.push({ name: "Login" });
      } catch (error) {
        alert(error);
      }
    }
  },
  firestore: {
    customers: db
      .collection("users")
      .doc("lUw28EDnFUOscJSlttpDC8SH5Yy1")
      .collection("customers")
  }
};
</script>
