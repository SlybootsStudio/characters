<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <TheHeader />
        <TheNavbar />
        <router-view />
      </div>
    </div>
    <TheFooter v-if="0" />
  </div>
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

<style>
div {
  border: 1px solid red;
}
</style>
