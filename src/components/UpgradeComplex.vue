<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <span class="fw-bold">Upgrade (Lvl {{ level }})</span
      ><button
        @click="buy()"
        class="btn btn-sm"
        :class="{
          'btn-secondary disabled': resources < cost,
          'btn-primary': resources >= cost
        }"
      >
        Upgrade
      </button>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">Required</div>
        <div class="col">Reward<span
        :class="{
          'text-danger': resources < cost,
          'text-success': resources >= cost
        }"
        >{{ resources.toLocaleString() }}</span
      >
      / {{ cost.toLocaleString() }} Gold
    </div></div>
      </div>

      <span
        :class="{
          'text-danger': resources < cost,
          'text-success': resources >= cost
        }"
        >{{ resources.toLocaleString() }}</span
      >
      / {{ cost.toLocaleString() }} Gold
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeSimple",
  data: function () {
    return {
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
