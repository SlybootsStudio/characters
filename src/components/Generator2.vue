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
      <!--<ProgressBar
        label="Experience"
        :amount="experience"
        :max="nextLevel"
        @complete="addGold()"
      /> -->
      <div class="row">
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
      <div class="d-flex justify-content-between">
        <span class="fw-bold">Base Income</span>
        <div>{{ totalIncome }} {{ resourceLabel }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <span class="fw-bold">Total Income</span>
        <div>{{ totalIncome }} {{ resourceLabel }}</div>
      </div>
    </div>
    <div class="card-footer">
      <UpgradeSimple
        label="Decrease Duration"
        :resource="resource"
        :resourceLabel="resourceLabel"
        :maxLevel="10"
        @upgrade="decreaseDuration($event)"
      />
      <UpgradeSimple
        label="Increase Income"
        :resource="resource"
        :maxLevel="20"
        :resourceLabel="resourceLabel"
        @upgrade="increaseIncome($event)"
      />
    </div>
  </div>
</template>

<script>
import AnimatedBar from "@/components/AnimatedBar";
//import ProgressBar from "@/components/ProgressBar";
import UpgradeSimple from "@/components/UpgradeSimple";

export default {
  name: "Generator",
  components: {
    AnimatedBar,
    //    ProgressBar,
    UpgradeSimple
  },
  data() {
    return {
      duration: 30,
      income: 1,
      experience: 0
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
      let target = 5;
      let scale = 2;
      let remaining = this.experience;

      while (remaining > target) {
        level += 1;
        remaining -= target;
        target = Math.pow(target, scale);
      }

      return level;
    },
    totalIncome() {
      return this.level * this.income;
    }
  },
  methods: {
    addResource() {
      console.log("add resource");
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
