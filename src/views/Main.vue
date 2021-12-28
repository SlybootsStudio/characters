<template>
  <LootChest :itemIds="itemIds" :draws="1" :power="1" class="mb-3" />
  <LootChest :itemIds="itemIds2" :draws="1" :power="3" />

  <UpgradeSimple
    label="Buy Pie"
    :resource="gold"
    :resourceLabel="Gold"
    @upgrade="addResource($event)"
  />
</template>

<script>
import LootChest from "@/components/LootChest.vue";
import UpgradeSimple from "@/components/UpgradeSimple.vue";

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
    LootChest,
    UpgradeSimple
  },
  methods: {
    increaseDuration() {
      this.duration = this.duration + 5;
    },
    addResource(amount) {
      this.gold -= amount;
    }
  }
};
</script>
