<template>
  <TheHeader />
  <TheNavbar />
  <div class="container-fluid">
    <router-view />
  </div>
  <TheFooter v-if="0" />
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader.vue";
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavbar,
    TheFooter
  }
};
</script>

<style></style>
