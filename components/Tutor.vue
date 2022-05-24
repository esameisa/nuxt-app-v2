<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-sm-6">
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }} - {{ user.name }} - {{ user.salary }}
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <ul>
          <li v-for="user in getUsers" :key="user.id">
            {{ user.id }} - {{ user.name }} - {{ user.salary }}
          </li>
        </ul>
      </div>
      <div class="col-sm-12">
        <button class="btn btn-danger mx-2" @click="increasSalaryMutations">
          + Increase Salary Mutations
        </button>
        <button class="btn btn-success mx-2" @click="increasSalaryAction">
          + Increase Salary Action after 1 sec
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TutorPage",
  data() {
    return {
      title: "Tutor Page",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    ...mapGetters(["getUsers"]),
  },
  methods: {
    increasSalaryMutations() {
      this.$store.commit("increasSalary");
    },

    ...mapActions({
      increasSalaryAction: "increasSalary",
    }),
    // Or
    // increasSalaryAction() {
    //   this.$store.dispatch("increasSalary");
    // },
  },
};
</script>
