<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <NuxtLink :to="{ name: 'index' }" class="navbar-brand">Navbar</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink :to="{ name: 'index' }" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="{ name: 'about' }" class="nav-link">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="{ name: 'login' }" class="nav-link">Login</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
  color: #00c58e !important;
}
</style>
