<template>
  <div class="row">
    <div class="col text-end" v-if="canBuy">
      <span
        :class="{
          'text-danger': resource < cost,
          'text-success': resource >= cost
        }"
        >{{ resource.toLocaleString() }}</span
      >
      / {{ cost.toLocaleString() }} {{ resourceLabel }}
    </div>
    <div class="col text-end" v-if="canBuy">
      <button
        @click="upgrade()"
        class="btn btn-sm text-uppercase"
        :class="{
          'btn-outline-secondary disabled': resource < cost,
          'btn-outline-primary': resource >= cost
        }"
      >
        {{ label }}
      </button>
    </div>
    <div class="col text-end" v-if="!canBuy">
      <span class="badge bg-info">MAX</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeSimple",
  data: function () {
    return {
      level: 1
    };
  },
  props: {
    label: String,
    resourceLabel: String,
    resource: Number,
    scale: {
      type: Number,
      default: 1
    },
    base: {
      type: Number,
      default: 100
    },
    maxLevel: {
      type: Number,
      default: 10
    }
  },
  computed: {
    cost() {
      if (this.scale) {
        return Math.round(Math.pow(this.level * this.base, this.scale));
      } else {
        return this.base;
      }
    },
    canBuy() {
      if (this.maxLevel == 0) {
        return true;
      } else if (this.level < this.maxLevel) {
        return true;
      }

      return false;
    }
  },
  methods: {
    upgrade() {
      this.$emit("upgrade", this.cost);
      this.level += 1;
    }
  }
};
</script>

<style scoped></style>
