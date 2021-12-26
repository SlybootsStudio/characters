<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <span class="fw-bold"
        >LootChest ({{ draws }}) - ({{ totalItemsCount }})</span
      ><button @click="open()" class="btn btn-sm btn-primary">Open</button>
    </div>
    <div class="card-body">
      <div class="fw-bold">Contents...</div>
      <div v-for="item in items" :key="item.id" class="row mb-1">
        <div class="col">{{ item.id }}</div>
        <div class="col" :class="`text-${item.rarityColor}`">
          {{ item.label }}<span v-if="item.unique">*</span>
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
    draws: Number,
    power: Number
  },
  computed: {
    resultsIds() {
      let ids = this.results.map((item) => item.id);

      if (ids.length) {
        return [...new Set(ids)];
      }

      return [];
    },
    filteredItemIds() {
      return this.itemIds.filter((item) => {
        if (!item?.unique) {
          return true;
        }

        if (this.resultsIds.includes(item.id)) {
          return false;
        }

        return true;
      });
    },
    totalItemsCount() {
      let droprates = this.filteredItemIds.map((item) =>
        Math.pow(item.droprate, this.power)
      );

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
        for (let x = 0; x < Math.pow(item.droprate, this.power); x += 1) {
          pool.push(item);
        }
      });

      return pool;
    },
    items() {
      let arr = this.filteredItemIds.map((item) => {
        let itemMeta = ITEMS.find((ITEM) => {
          return ITEM.id == item.id;
        });

        let rarityColor = RARITY_COLOR[itemMeta.rarity];

        item.label = itemMeta.label;
        item.rarityColor = rarityColor;

        const chance =
          (100 / this.totalItemsCount) * Math.pow(item.droprate, this.power);
        item.chance = chance.toFixed(2);

        console.log(this.totalItemsCount, item.droprate, chance);

        return item;
      });

      return arr;
    }
  },
  methods: {
    open() {
      for (let x = 0; x < this.draws; x += 1) {
        let item = this.getItem();

        // todo, quantity
        this.results.unshift(item);
      }
    },
    getItem() {
      let index = Math.floor(Math.random() * this.totalItemsCount);

      let item = this.totalItems[index];

      return item;
    }
  }
};
</script>

<style scoped></style>
