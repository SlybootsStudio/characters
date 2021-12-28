<template>
  <div class="row">
    <div class="col">
      <ThinBar label="Thin Bar" :duration="duration" />
      <br />
      <LabelBar label="Label Bar" :duration="duration" />
      <br />
    </div>
    <div class="col">
      <AnimatedBar
        label="Animated Bar - Thin"
        :duration="duration"
        :thin="true"
      />
      <br />
      <AnimatedBar label="Animated Bar" :duration="duration" />
      <br />

      <br />
      <br />

      <ProgressBar label="Progress Bar" :amount="duration" :max="100" />
      <br />
    </div>
  </div>
  <button @click="increaseDuration()" class="btn btn-sm btn-primary">
    Increase Duration
  </button>
  <br />
  <hr />
  <div class="alert alert-secondary">{{ gold.toLocaleString() }} Gold</div>
  <hr />
  <br />

  <Generator
    label="Miner"
    resourceLabel="Gold"
    :resource="gold"
    @addResource="addGold($event)"
  />
  <br />
  <Battle
    label="Battle"
    resourceLabel="Gold"
    :resource="gold"
    @addResource="addGold($event)"
  />

  <LootChest :itemIds="itemIds" :draws="1" :power="1" class="mb-3" />
  <LootChest :itemIds="itemIds2" :draws="1" :power="3" />

  <UpgradeSimple :boost="itemIds2" />
</template>

<script>
// @ is an alias to /src
import ThinBar from "@/components/ThinBar.vue";
import LabelBar from "@/components/LabelBar.vue";
import ProgressBar from "@/components/ProgressBar.vue";

import AnimatedBar from "@/components/AnimatedBar.vue";

import LootChest from "@/components/LootChest.vue";
import UpgradeSimple from "@/components/UpgradeSimple.vue";

import Generator from "@/components/Generator.vue";

import Battle from "@/components/Battle.vue";

import { LootBox, LootBox2 } from "@/data/loot.js";

export default {
  name: "Main",
  data() {
    return {
      duration: 0,
      gold: 88888,
      itemIds: LootBox,
      itemIds2: LootBox2
    };
  },
  components: {
    ThinBar,
    LabelBar,
    AnimatedBar,
    ProgressBar,
    LootChest,
    UpgradeSimple,
    Generator,
    Battle
  },
  methods: {
    increaseDuration() {
      this.duration = this.duration + 5;
    },
    addGold(amount) {
      this.gold += amount;
    }
  }
};
</script>
