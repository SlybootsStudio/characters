<template>
  <div class="bar-wrapper">
    <div class="progress position-relative" style="width: 100px">
      <div
        class="progress-bar js-action-bar"
        role="progressbar"
        :style="{ width: `${progress}%` }"
      >
        <span
          class="justify-content-center d-flex position-absolute w-100 text-white"
          >Label ({{ progress }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    amount: {
      type: Number,
      default: 0
    },
    maximum: {
      type: Number,
      default: 100
    }
  },
  computed: {
    progress() {
      let progress = (100 / this.maximum) * this.amount;
      //progress = Math.round(progress);
      return progress;
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
