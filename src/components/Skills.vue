<template>
  <div class="card">
    <div class="card-header"></div>
    <div class="card-body">...</div>
  </div>
</template>

<script>
export default {
  name: "Battle",
  components: {},
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
