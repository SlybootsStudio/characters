<template>
  <div class="bar-wrapper">
    <div class="text-center">{{ label }} ({{ duration }})</div>
    <div class="progress position-relative thin-bar">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{
          width: `${progress}%`,
          '-webkit-transition': `${transition}`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThinBar",
  data() {
    return {
      progress: 0,
      transition: `none`
    };
  },
  props: {
    label: String,
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
    animate() {
      this.clearTransition();
      setTimeout(() => this.beginTransition(), 5);

      this.$emit("complete");
    }
  },

  watch: {
    duration() {
      this.animate();
    }
  }
};
</script>

<style scoped>
.thin-bar {
  height: 2px;
}
</style>
