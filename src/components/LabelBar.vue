<template>
  <div class="bar-wrapper">
    <div class="text-center label"></div>
    <div class="progress position-relative" style="height: 2px">
      <div
        class="progress-bar js-action-bar"
        role="progressbar"
        :style="{
          width: `${progress}%`,
          '-webkit-transition': `${transition}`
        }"
      ></div>
    </div>
  </div>
  <div class="progress position-relative" style="width: 100px">
    <div
      class="progress-bar js-action-bar"
      role="progressbar"
      :style="{ width: `${progress}%`, '-webkit-transition': `${transition}` }"
    >
      <span
        class="justify-content-center d-flex position-absolute w-100 text-white"
        >Label ({{ duration }})</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTick",
  data: function () {
    return {
      progress: 0,
      transition: `none`,
      interval: null
    };
  },
  props: {
    duration: {
      type: Number,
      default: 1
    }
  },
  methods: {
    clearTransition() {
      this.progress = 100;
      this.transition = "none";
    },
    beginTransition() {
      this.progress = 0;
      this.transition = `width ${this.duration}s linear 0s`;
    },
    doTick() {
      console.log("doTick...");
      // Animate the Actions Bar
      this.clearTransition();
      setTimeout(() => this.beginTransition(), 10);

      //      this.$store.commit('TICK', 3);
      //this.$store.dispatch("doTick", 1);

      //emit now.
    }
  },

  watch: {
    duration() {
      setTimeout(() => this.doTick(), 5);
    }
  }
};
</script>

<style scoped>
.bar-wrapper {
  width: 100px;
}

.label {
  font-size: 0.85em;
}
</style>
