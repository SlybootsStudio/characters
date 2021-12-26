<template>
  <div class="h4">Main View</div>
  <ThinBar :duration="duration" />
  <br />
  <LabelBar :duration="duration" />
  <br />
  <ProgressBar :amount="duration" :max="100" />
  <br />
  <button @click="upgrade()" class="btn btn-sm btn-primary">Upgrade</button>
  <br />
  <hr />
  <br />
  <LootChest :itemIds="itemIds" :draws="10" :power="1" class="mb-3" />
  <LootChest :itemIds="itemIds2" :draws="10" :power="1" />
</template>

<script>
// @ is an alias to /src
import ThinBar from "@/components/ThinBar.vue";
import LabelBar from "@/components/LabelBar.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import LootChest from "@/components/LootChest.vue";

import { LootBox, LootBox2 } from "@/data/loot.js";

export default {
  name: "Main",
  data() {
    return {
      duration: 0,
      itemIds: LootBox,
      itemIds2: LootBox2
    };
  },
  components: {
    ThinBar,
    LabelBar,
    ProgressBar,
    LootChest
  },
  methods: {
    upgrade() {
      this.duration = this.duration + 5;
    }
  }
};
</script>
