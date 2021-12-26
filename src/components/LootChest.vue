<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <span class="fw-bold">LootChest ({{ draws }})</span
      ><button @click="open()" class="btn btn-sm btn-primary">Open</button>
    </div>
    <div class="card-body">
      <div class="fw-bold">Contents...</div>
      <div v-for="item in items" :key="item.id" class="row mb-1">
        <div class="col">{{ item.id }}</div>
        <div class="col" :class="`text-${item.rarityColor}`">
          {{ item.label }}
        </div>
        <div class="col">{{ item.chance }}%</div>
      </div>
    </div>
    <div class="card-footer">
      <div class="fw-bold">Results...</div>
      <div v-for="item in results" :key="item.id" class="row mb-1">
        <div class="col">{{ item.id }}</div>
        <div class="col" :class="`text-${item.rarityColor}`">
          {{ item.label }}
        </div>
        <div class="col">{{ item.chance }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ITEMS, RARITY_COLOR } from "@/data/loot.js";

export default {
  name: "LootBox",
  data: function () {
    return {
      results: []
    };
  },
  props: {
    itemIds: Array,
    draws: Number
  },
  computed: {
    totalItemsCount() {
      let droprates = this.itemIds.map((item) => item.droprate);

      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;

      let amount = droprates.reduce(reducer);
      return amount;
    },
    totalItemsSimpleCount() {
      return this.totalItems.length;
    },
    totalItems() {
      let pool = [];

      this.items.forEach((item) => {
        for (let x = 0; x < item.droprate; x += 1) {
          pool.push(item);
        }
      });

      return pool;
    },
    items() {
      let arr = this.itemIds.map((item) => {
        let itemMeta = ITEMS.find((ITEM) => {
          return ITEM.id == item.id;
        });

        let rarityColor = RARITY_COLOR[itemMeta.rarity];

        item.label = itemMeta.label;
        item.rarityColor = rarityColor;

        const chance = (100 / this.totalItemsCount) * item.droprate;
        item.chance = chance.toFixed(2);

        return item;
      });

      return arr;
    }
  },
  methods: {
    open() {
      for (let x = 0; x < this.draws; x += 1) {
        this.getItem();
      }
    },
    getItem() {
      let index = Math.floor(Math.random() * this.totalItemsCount);
      console.log(index);

      let item = this.totalItems[index];

      console.log(item.label);
    }
  }
};
</script>

<style scoped></style>
