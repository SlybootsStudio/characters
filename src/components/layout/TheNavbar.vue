<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark text-light border-top border-bottom border-secondary"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <div class="navbar-sm d-sm-block d-md-none">
            <router-link class="btn btn-link" :to="{ name: 'Main' }"
              >Home</router-link
            >
          </div>

          <div class="navbar-md d-sm-none d-none d-md-block">
            <router-link class="btn btn-link me-2" :to="{ name: 'Main' }"
              >Home</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    expandSize: String,
    links: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: #222 !important;
}

.navbar-nav .btn {
  text-decoration: none;
}
</style>
