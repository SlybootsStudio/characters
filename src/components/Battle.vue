<template>
  <div class="card" :class="{ shake: doShake }" v-if="strength > 0">
    <div class="card-header">
      <span class="fw-bold">{{ label }}</span>
    </div>
    <AnimatedBar
      :duration="duration"
      :thin="true"
      :looped="true"
      @complete="siege()"
    />
    <div class="card-body bg-light">
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Castle Strength</span>
        </div>
        <div class="col">{{ strength }}</div>
        <div class="col-6">
          <ProgressBar label="Strength" :amount="strength" :max="maxStrength" />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Builders</span>
        </div>
        <div class="col">{{ strength }}</div>
        <div class="col-6">
          <UpgradeSimple
            label="Repair Wall"
            :resource="resource"
            :resourceLabel="resourceLabel"
            :scale="0"
            :base="1000"
            :maxLevel="0"
            @upgrade="addStrength($event)"
          />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Fighters</span>
        </div>
        <div class="col">{{ fighters }}</div>
        <div class="col-6">
          <UpgradeSimple
            :label="`Train ${fightersPerTraining} Fighters`"
            :resource="resource"
            :resourceLabel="resourceLabel"
            :scale="0"
            :base="100"
            :maxLevel="0"
            @upgrade="addFighter($event)"
          />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Recruitment</span>
        </div>
        <div class="col">+1 Fighter per training</div>
        <div class="col-6">
          <UpgradeSimple
            label="Improve recruitment"
            :resource="resource"
            :resourceLabel="resourceLabel"
            :scale="1.1"
            :base="50"
            :maxLevel="0"
            @upgrade="recruitment($event)"
          />
        </div>
      </div>
      <div class="row mb-2 pb-2 border-bottom border-secondary">
        <div class="col">
          <span class="fw-bold">Wizard</span>
        </div>
        <div class="col">Reduce enemies by 50%</div>
        <div class="col-6">
          <UpgradeSimple
            label="Summon Earthquake"
            :resource="resource"
            :resourceLabel="resourceLabel"
            :scale="1.5"
            :base="500"
            :maxLevel="5"
            @upgrade="wizardAttack($event)"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="fw-bold">Total Enemies</span>
        </div>
        <div class="col">{{ enemies }}</div>
        <div class="col-6"></div>
      </div>
    </div>
    <div class="card-footer">
      <div class="fw-bold">Round {{ round }} Results</div>
      <div class="row text-center">
        <div class="col">
          <div class="alert alert-success h3">{{ fighterDamage }}</div>
        </div>
        <div class="col">
          <div class="alert alert-warning h3">{{ enemyDamage }}</div>
        </div>
        <div class="col">
          <div class="alert alert-danger h3">{{ castleDamage }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="alert h3 bg-danger text-center">DEFEATED</div>
</template>

<script>
import AnimatedBar from "@/components/AnimatedBar";
import ProgressBar from "@/components/ProgressBar";
import UpgradeSimple from "@/components/UpgradeSimple";

export default {
  name: "Battle",
  components: {
    AnimatedBar,
    ProgressBar,
    UpgradeSimple
  },
  data() {
    return {
      round: 1,
      strength: 1000000,
      maxStrength: 1000000,
      duration: 15,
      fighters: 10,
      enemies: 1,
      fighterDamage: 0,
      enemyDamage: 0,
      castleDamage: 0,
      fightersPerTraining: 2,
      doShake: false
    };
  },
  props: {
    label: String,
    resource: Number,
    resourceLabel: String
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
    decreaseDuration(cost) {
      this.$emit("addResource", -cost);
      let duration = this.duration - 0.1;
      duration = duration.toFixed(1);
      this.duration = duration;
    },
    addStrength(cost) {
      this.$emit("addResource", -cost);
      this.strength += 100;
      if (this.strength > this.maxStrength) {
        this.strength = this.maxStrength;
      }
    },
    addFighter(cost) {
      this.$emit("addResource", -cost);
      this.fighters += this.fightersPerTraining;
    },
    recruitment(cost) {
      this.$emit("addResource", -cost);
      this.fightersPerTraining += 1;
    },
    wizardAttack(cost) {
      this.$emit("addResource", -cost);
      this.enemies /= 2;
      this.enemies = Math.round(this.enemies);
      this.doShake = true;

      setTimeout(() => (this.doShake = false), 1000);
    },
    siege() {
      console.log("SIEGE", this.round);
      this.enemies += this.round;
      this.enemies *= 1.2;
      this.enemies = Math.round(this.enemies);

      // damage is all the enemies plus or minus 20
      this.enemyDamage =
        this.enemies + Math.floor(Math.random() * this.enemies);
      this.fighterDamage =
        this.fighters + Math.floor(Math.random() * this.fighters);

      this.fighters -= this.enemyDamage;

      if (this.fighters < 0) {
        this.strength += this.fighters; // negatives
        this.castleDamage = this.fighters * 5;
        this.fighters = 0;
      }

      this.enemies -= this.fighterDamage;

      if (this.enemies < 0) {
        this.enemies = 0;
      }

      this.round += 1;
    }
  }
};
</script>

<style scoped>
/* https://css-tricks.com/snippets/css/shake-css-keyframe-animation/ */
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
