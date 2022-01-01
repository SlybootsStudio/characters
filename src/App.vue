<template>
  <div class="kong border">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col">
          <TheHeader />
          <router-view />
        </div>
      </div>
      <TheFooter />
    </div>
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
.kong {
  width: 800px;
  height: 600px;
  overflow: hidden;
}
</style>
