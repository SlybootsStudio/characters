<template>
  Click this puppy to get more puppies!
  <button class="btn btn-primary" @click="theButtonClick()">
    Make more puppies
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TheButton",
  methods: {
    ...mapActions(["theButtonClick"])
  }
};
</script>
