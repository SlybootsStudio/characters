<template>
  <div class="div justify-content-between border-bottom">
    <div class="h5 p-1">{{ title }}</div>
    <div class="">00</div>
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
