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
          <p>New Customer</p><br />
          <b-button class="is-primary" @click="showAddCustomerModal">Create new customer</b-button>
        </div>
        <div v-for="customer in filteredCustomers" :key="customer.id" class="box">
          <CustomerBox :customer="customer" />
        </div>
      </div>
    </div>
    <b-modal :active.sync="isAddCustomerModalActive" has-modal-card trap-focus>
      <add-customer-modal
        :phone="addCustomerModalProps.phone"
        :email="addCustomerModalProps.email"
        :name="addCustomerModalProps.name" />
    </b-modal>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import LoginDisplay from "../components/LoginDisplay";
import CustomerBox from "../components/CustomerBox";
import AddCustomerModal from "../components/AddCustomerModal";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^[0-9]*$/;
  return re.test(String(phone).toLowerCase());
}

export default {
  data() {
    return {
      customers: [],
      searchText: "",
      isAddCustomerModalActive: false,
      addCustomerModalProps: {
        phone: "",
        email: "",
        name: ""
      }
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
      if (this.filteredCustomers.length == 1 && this.filteredCustomers[0].id === this.searchText) return true;
      return false;
    }
  },
  components: {
    LoginDisplay,
    CustomerBox,
    AddCustomerModal
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
    showAddCustomerModal() {
      this.addCustomerModalProps.phone = "";
      this.addCustomerModalProps.email = "";
      this.addCustomerModalProps.name = "";
      
      if (validatePhone(this.searchText)) this.addCustomerModalProps.phone = this.searchText;
      else if (validateEmail(this.searchText)) this.addCustomerModalProps.email = this.searchText;
      else this.addCustomerModalProps.name = this.searchText;
      
      this.isAddCustomerModalActive = true;
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
