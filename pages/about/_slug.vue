<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1>{{ title }}</h1>
          <h1 class="my-5">Slug | {{ this.slug }}</h1>
          <p class="lead">{{ $route.path }}</p>

          <Loading v-if="$fetchState.pending" />

          <div v-else>
            <p class="lead">
              <span>Package name: {{ this.nuxtPackage.name }}</span>
              <span>, </span>
              <span>Version: {{ this.nuxtPackage.version }}</span>
            </p>
          </div>

          <p class="lead">
            {{
              this.amount.toLocaleString("en-us", {
                style: "currency",
                currency: "EGP",
              })
            }}
          </p>

          <p class="lead">
            {{
              this.today.toLocaleString("en-us", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutPage",

  middleware: ["authToken"],

  data() {
    return {
      title: "Aboutttt page",
      nuxtPackage: null,
      amount: 50.3,
      today: new Date(),
    };
  },

  fetchDelay: 1000,

  async fetch() {
    await this.getNuxtPackage();
  },

  methods: {
    async getNuxtPackage() {
      const data = axios.get(`https://unpkg.com/nuxt/package.json`);
      const result = await data;
      this.nuxtPackage = result.data;
    },
  },

  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title + " description",
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
