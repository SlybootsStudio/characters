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
      elapsed: 0, // used for loop
      previousTimestamp: 0, // used for loop
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
      setTimeout(() => this.beginTransition(), 100);

      this.$emit("complete");
    },
    loop(timestamp) {
      if (this.previousTimestamp === null) {
        this.previousTimestamp = timestamp;
      }
      this.elapsed += (timestamp - this.previousTimestamp) / 1000;

      if (this.elapsed >= this.duration) {
        this.animate();
        this.elapsed -= this.duration;
      }

      this.previousTimestamp = timestamp;

      window.requestAnimationFrame(this.loop);
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
      window.requestAnimationFrame(this.loop);
    }
  }
};
</script>

<style scoped>
.thin-bar {
  height: 2px;
}
</style>
