<template>
  <div v-if="user.isLoggedIn">
    <p>{{ user.data.displayName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"])
  }
};
</script>
