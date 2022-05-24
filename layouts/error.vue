<template>
  <div class="container text-center py-5">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink :to="{ name: 'index' }">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
