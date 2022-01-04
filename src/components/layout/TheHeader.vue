<template>
  <div class="container-fluid border-bottom">
    <div class="d-flex justify-content-between">
      <div class="h5 p-1">{{ title }}</div>
      <div class="p-1">100 Puppies</div>
      <div class="p-1">1 Snacks</div>
      <TheButton />
      <button class="btn btn-primary">Lucky Puppy</button>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton";
export default {
  name: "TheHeader",
  components: {
    TheButton
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>
