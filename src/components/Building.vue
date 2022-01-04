<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <div>
        <span class="fw-bold">{{ label }}</span> (x{{ quantity }})
      </div>
      <div>{{ totalIncome }} {{ resourceLabel }} / {{ duration }}s</div>
    </div>
    <AnimatedBar
      v-if="quantity > 0"
      :duration="duration"
      :thin="true"
      :looped="true"
      @complete="addResource()"
    />
    <div class="card-body bg-light">
      <div class="d-flex justify-content-between">
        <div class="me-5">
          <Puppy />
        </div>
        <div class="content-wrapper w-100">
          <div class="mb-3">{{ description }}</div>
          <div class="mb-3">
            Each {{ label }} generates {{ income }} {{ resourceLabel }} per
            {{ duration }} seconds.
          </div>
          <div class="row">
            <div class="col-12">
              <UpgradeSimple
                label="Buy"
                :resource="resource"
                :resourceLabel="resourceLabel"
                :maxLevel="0"
                :base="15"
                :scale="1.1"
                @upgrade="increaseQuantity($event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedBar from "@/components/AnimatedBar";
import UpgradeSimple from "@/components/UpgradeSimple";
import Puppy from "@/components/PuppySVG";

export default {
  name: "Generator",
  components: {
    AnimatedBar,
    UpgradeSimple,
    Puppy
  },
  data() {
    return {
      quantity: 0,
      experience: 0,
      experienceBase: 5,
      experienceScaling: 1.25
    };
  },
  props: {
    label: String,
    description: String,
    duration: {
      type: Number,
      default: 100
    },
    income: {
      type: Number,
      default: 1
    },
    cost: {
      type: Number,
      default: 10
    },
    resourceLabel: String,
    resource: Number
  },
  computed: {
    totalIncome() {
      return this.quantity * this.income;
    }
  },
  methods: {
    addResource() {
      console.log("add resource");
      this.$emit("addResource", { amount: this.totalIncome, isEarned: true });
    },
    increaseQuantity(cost) {
      this.$emit("addResource", { amount: -cost });
      this.quantity += 1;
    }
  }
};
</script>

<style scoped></style>
