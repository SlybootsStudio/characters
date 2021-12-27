<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body"><ThinBar /> <ProgressBar /></div>
    <div class="card-footer"><UpgradeSimple /></div>
  </div>
</template>

<script>
import ThinBar from "@/components/ThinBar";
import ProgressBar from "@/components/ProgressBar";
import UpgradeSimple from "@/components/UpgradeSimple";

export default {
  name: "Generator",
  components: {
    ThinBar,
    ProgressBar,
    UpgradeSimple
  },
  data: function () {
    return {
      title: "Gold Mine",
      progress: 0,
      transition: `none`
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

      //this.$store.commit('TICK', 3);
      //this.$store.dispatch("doTick", 1);
      this.$emit("tick");
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
