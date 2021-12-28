<template>
  <div class="card">
    <div class="card-header">
      <span class="fw-bold">{{ label }}</span>
    </div>
    <AnimatedBar
      :duration="duration"
      :thin="true"
      :looped="true"
      @complete="addResource()"
    />
    <div class="card-body bg-light">
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Level</span>
        </div>
        <div class="col">{{ level }}</div>
        <div class="col-6">
          <ProgressBar
            label="Experience"
            :amount="progressToLevel"
            :max="experienceToLevel"
          />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Duration</span>
        </div>
        <div class="col">{{ duration }} seconds</div>
        <div class="col-6">
          <UpgradeSimple
            label="Decrease Duration"
            :resource="resource"
            :resourceLabel="resourceLabel"
            :maxLevel="10"
            @upgrade="decreaseDuration($event)"
          />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Base Income</span>
        </div>
        <div class="col">{{ income }} {{ resourceLabel }}</div>
        <div class="col-6">
          <UpgradeSimple
            label="Increase Income"
            :resource="resource"
            :maxLevel="20"
            :resourceLabel="resourceLabel"
            @upgrade="increaseIncome($event)"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="fw-bold">Total Income</span>
        </div>
        <div class="col">{{ totalIncome }} {{ resourceLabel }}</div>
        <div class="col-6"></div>
      </div>
    </div>
  </div>
  {{ getNextLevel(1) }}<br />
  {{ getNextLevel(2) }}<br />
  {{ getNextLevel(3) }}<br />
  {{ getNextLevel(4) }}<br />
  {{ getNextLevel(5) }}<br />
</template>

<script>
import AnimatedBar from "@/components/AnimatedBar";
import ProgressBar from "@/components/ProgressBar";
import UpgradeSimple from "@/components/UpgradeSimple";

export default {
  name: "Generator",
  components: {
    AnimatedBar,
    ProgressBar,
    UpgradeSimple
  },
  data() {
    return {
      duration: 2,
      income: 1,
      experience: 0,
      experienceBase: 5,
      experienceScaling: 1.25
    };
  },
  props: {
    label: String,
    resourceLabel: String,
    resource: Number
  },
  computed: {
    level() {
      let level = 1;
      let target = this.getNextLevel(level);
      let remaining = this.experience;

      while (remaining >= target) {
        level += 1;
        remaining -= target;
        target = this.getNextLevel(level);
      }

      return level;
    },
    progressToLevel() {
      let level = 1;
      let target = this.getNextLevel(level);
      let remaining = this.experience;

      while (remaining >= target) {
        level += 1;
        remaining -= target;
        target = this.getNextLevel(level);
      }

      return remaining;
    },
    experienceToLevel() {
      return this.getNextLevel(this.level);
    },
    totalIncome() {
      return this.level * this.income;
    }
  },
  methods: {
    getNextLevel(i) {
      let amount = this.experienceBase;
      for (let x = 1; x < i; x += 1) {
        amount = Math.pow(amount, this.experienceScaling);
      }

      amount = Math.round(amount);

      return amount;
    },
    addResource() {
      console.log("add resource");
      this.experience += 1;
      this.$emit("addResource", this.totalIncome);
      //      this.resource += this.amountPerTick;
    },
    decreaseDuration(cost) {
      this.$emit("addResource", -cost);
      let duration = this.duration - 0.1;
      duration = duration.toFixed(1);
      this.duration = duration;
    },
    increaseIncome(cost) {
      this.$emit("addResource", -cost);

      this.income += 1;
    }
  }
};
</script>

<style scoped></style>
