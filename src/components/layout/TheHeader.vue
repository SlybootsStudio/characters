<template>
  <div class="h5 p-1 border-bottom">{{ title }}</div>
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
