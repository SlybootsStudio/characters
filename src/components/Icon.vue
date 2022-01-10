<template>
  <svg
    :width="w"
    :height="h"
    version="1.1"
    viewBox="0 0 1200 1200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="path" :fill="color" />
  </svg>
</template>

<script>
import paths from "@/data/icons";

export default {
  name: "Icon",
  props: {
    color: {
      type: String,
      default: "white"
    },
    h: {
      type: String,
      default: "100px"
    },
    w: {
      type: String,
      default: "100px"
    },
    icon: {
      type: String
    }
  },
  computed: {
    path() {
      return paths[this.icon];
    }
  },
  methods: {},
  watch: {}
};
</script>
