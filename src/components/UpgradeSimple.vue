<template>
  <div class="fw-bold">{{ title }}</div>
  <div class="row">
    <div class="col">
      <span class="fw-bold">Lvl {{ level }}</span>
    </div>
    <div class="col">
      <span
        :class="{
          'text-danger': resources < cost,
          'text-success': resources >= cost
        }"
        >{{ resources.toLocaleString() }}</span
      >
      / {{ cost.toLocaleString() }} Gold
    </div>
    <div class="col text-end">
      <button
        @click="buy()"
        class="btn btn-sm text-uppercase"
        :class="{
          'btn-outline-secondary disabled': resources < cost,
          'btn-outline-primary': resources >= cost
        }"
      >
        Upgrade
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeSimple",
  data: function () {
    return {
      title: "Speed",
      level: 1,
      power: 1,
      base: 100,
      resources: 10000
    };
  },
  props: {},
  computed: {
    cost() {
      return Math.round(Math.pow(this.level * this.base, this.power));
    }
  },
  methods: {
    buy() {
      this.resources -= this.cost;
      this.level += 1;
    }
  }
};
</script>

<style scoped></style>
