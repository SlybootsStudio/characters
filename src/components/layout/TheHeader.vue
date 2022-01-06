<template>
  <div class="container-fluid border-bottom">
    <div class="d-flex justify-content-between">
      <div class="h5 p-1">{{ title }}</div>
      <div class="p-1">{{ puppies.toLocaleString() }} Puppies</div>
      <div class="p-1">{{ snacks.toLocaleString() }} Snacks</div>
      Click this puppy to get more puppies!
      <button class="btn btn-primary" @click="theButtonClick()">
        Make more puppies
      </button>
      <button class="btn btn-primary">Lucky Puppy</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TheHeader",
  components: {},
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  },
  computed: {
    ...mapState(["puppies", "snacks"])
  },
  methods: {
    ...mapActions(["theButtonClick"])
  }
};
</script>
