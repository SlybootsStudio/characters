<template>
  <div class="body border border-secondary">
    <TheHeader />
    <div class="container">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style scoped>
.body {
  width: 800px;
  height: 600px;
}
</style>
