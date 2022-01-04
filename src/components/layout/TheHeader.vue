<template>
  <div class="container-fluid border-bottom">
    <div class="d-flex justify-content-between">
      <div class="h5 p-1">{{ title }}</div>
      <div class="p-1">100 Puppies</div>
      <div class="p-1">1 Snacks</div>
      <button class="btn btn-primary">Click!</button>
      <button class="btn btn-primary">Lucky Puppy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>
