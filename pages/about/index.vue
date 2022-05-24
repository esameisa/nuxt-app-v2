<template>
  <div>
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-12">
          <h1>{{ this.title }}</h1>
        </div>
        <div class="col-sm-4">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="col-sm-8">
          <p class="lead m-0 p-0">{{ post.title }}</p>
          <p>{{ post.updatedAt }}</p>
          <div>
            <ul class="list-unstyled">
              <li class="d-inline-block w-25">{{ post.continent }}</li>
              <li class="d-inline-block w-25">{{ post.height }}</li>
              <li v-for="country in post.countries" :key="country">
                {{ country }}
              </li>
            </ul>
          </div>
          <p class="lead m-0 p-0">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",

  data() {
    return {
      title: "About page",
    };
  },

  head() {
    return {
      title: this.title,
    };
  },

  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`https://api.nuxtjs.dev/posts/1`);
    return {
      post,
    };
  },
};
</script>
