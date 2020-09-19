<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <h2 class="modal-card-title">New Customer</h2>
    </header>
    <section class="modal-card-body">
      <b-field label="Phone" horizontal>
        <b-input expanded :value="phone"></b-input>
      </b-field>
      <b-field label="Email" horizontal>
        <b-input expanded :value="email"></b-input>
      </b-field>
      <b-field label="Name" horizontal>
        <b-input expanded :value="name"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="$parent.close()">Close</button>
      <button class="button is-primary">Create</button>
    </footer>
  </div>
</template>

<script>
import { validatePhone, validateEmail } from "../utils";
export default {
  props: ["searchText"],
  data() {
    return {
      phone: "",
      email: "",
      name: ""
    };
  },
  mounted() {
    if (validatePhone(this.searchText)) this.phone = this.searchText;
    else if (validateEmail(this.searchText)) this.email = this.searchText;
    else this.name = this.searchText;
  }
};
</script>
