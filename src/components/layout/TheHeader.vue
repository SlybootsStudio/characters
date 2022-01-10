<template>
  <div class="container-fluid border-bottom pt-2 pv-2">
    <div class="d-flex justify-content-between">
      <div class="h5 p-1">{{ title }}</div>
      <div class="p-1">{{ gold.toLocaleString() }} Gold</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  },
  computed: {
    ...mapState(["gold"])
  },
  methods: {}
};
</script>
