<template>
  <div class="bar-wrapper">
    <div v-if="thin" class="text-center">{{ label }} ({{ amount }})</div>
    <div class="progress position-relative" :class="{ 'thin-bar': thin }">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: `${progress}%` }"
      >
        <span
          v-if="!thin"
          class="justify-content-center d-flex position-absolute w-100 text-white"
          >{{ label }} ({{ amount }} / {{ max }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    label: String,
    amount: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    thin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    progress() {
      let progress = (100 / this.max) * this.amount;
      if (progress > 100) {
        progress = 100;
      }
      progress = Math.round(progress);
      return progress;
    }
  }
};
</script>

<style scoped>
.thin-bar {
  height: 2px;
}
</style>
