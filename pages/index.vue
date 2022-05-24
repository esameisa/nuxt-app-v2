<template>
  <!-- <Tutorial/> -->
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="text-center">
            <h1 class="my-4">Hello, world!</h1>

            <div class="row">
              <div class="col-sm-6">
                <Students />
              </div>
              <div class="col-sm-6">
                <Tutor />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <ul>
                  <li v-for="todo in todos" :key="todo.text">
                    <input
                      :checked="todo.done"
                      @change="toggle(todo)"
                      type="checkbox"
                    />
                    <span :class="{ done: todo.done }">{{ todo.text }}</span>
                  </li>
                  <li>
                    <input
                      class="form-control"
                      @keyup.enter="addTodo"
                      placeholder="What needs to be done?"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <Loading v-if="$fetchState.pending" />

            <ul v-else>
              <li v-for="mountain in mountains" :key="mountain.title">
                <NuxtLink
                  :to="{ name: 'about-slug', params: { slug: mountain.slug } }"
                >
                  {{ mountain.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading.vue";
import { mapMutations } from "vuex";
import Students from "../components/Students.vue";
import Tutor from "../components/Tutor.vue";

export default {
  name: "IndexPage",

  middleware: ["authToken"],

  // auth: false,

  data() {
    return {
      mountains: [],
    };
  },
  async fetch() {
    await this.getMountains();
  },

  fetchDelay: 1000,

  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },

  methods: {
    async getMountains() {
      const data = axios.get(`${process.env.baseUrl}/mountains`);
      const result = await data;
      this.mountains = result.data;
      console.log(process.env.IEEE);
    },
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle",
    }),
  },
  head: {
    title: "Esam | NUXT V2",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png",
      },
    ],
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },

  components: { Loading, Students, Tutor },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
