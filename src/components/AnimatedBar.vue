<template>
  <div class="bar-wrapper">
    <div v-if="thin" class="text-center">{{ label }}</div>
    <div class="progress position-relative" :class="{ 'thin-bar': thin }">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{
          width: `${progress}%`,
          '-webkit-transition': `${transition}`
        }"
      >
        <span
          v-if="!thin"
          class="justify-content-center d-flex position-absolute w-100 text-white"
          >{{ label }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedBar",
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
    },
    thin: {
      type: Boolean,
      default: false
    },
    looped: {
      type: Boolean,
      default: false
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
      setTimeout(() => this.beginTransition(), 20);

      this.$emit("complete");

      setTimeout(() => this.animate(), this.duration * 1000);
    }
  },
  watch: {
    duration() {
      if (!this.looped) {
        this.animate();
      }
    }
  },
  created() {
    if (this.looped) {
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
