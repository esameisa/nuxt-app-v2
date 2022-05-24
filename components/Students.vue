<template>
  <div>
    <h1>{{ title }}</h1>
    <p>getUserById {{ this.userById }}: {{ getUserById }}</p>
    <p>getUsersLength: {{ getUsersLength }}</p>
    <input
      class="form-control"
      @keyup="filterUsersMethod"
      placeholder="Search users"
      v-model="search"
    />
    <ul v-if="filteredUsers.length" class="py-3 my-3">
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.id }} - {{ user.name }} - {{ user.salary }}
      </li>
    </ul>
    <p v-else class="py-3 my-3">No search results</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StudentsPage",
  data() {
    return {
      title: "Students Page",
      userById: 3,
      searchBy: "name",
      search: "",
      filteredUsers: [],
    };
  },
  methods: {
    filterUsersMethod() {
      this.filteredUsers = this.filterUsers(this.searchBy, this.search);
    },
  },
  computed: {
    ...mapGetters(["getUsers", "getUsersLength", "filterUsers"]),

    getUserById() {
      return this.$store.getters.getUserById(this.userById);
    },
  },
};
</script>
