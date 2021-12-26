export const RARITY = {
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  epic: "epic",
  legendary: "legendary",
  relic: "relic"
};

export const RARITY_COLOR = {
  common: "white",
  uncommon: "success",
  rare: "primary",
  epic: "warning",
  legendary: "info",
  relic: "danger"
};

export const ITEM_ID = {
  stone: 0,
  iron: 1,
  steel: 2,
  magicSword: 3
};

export const ITEMS = [
  {
    id: ITEM_ID.stone,
    label: "Stone",
    rarity: RARITY.common
  },
  {
    id: ITEM_ID.iron,
    label: "Iron",
    rarity: RARITY.uncommon
  },
  {
    id: ITEM_ID.steel,
    label: "Steel",
    rarity: RARITY.rare
  },
  {
    id: ITEM_ID.magicSword,
    label: "Magic Sword",
    rarity: RARITY.epic,
    unique: true
  }
];

export const LootBox = [
  {
    id: ITEM_ID.stone,
    quantityMin: 3,
    quantityMax: 5,
    droprate: 10
  },
  {
    id: ITEM_ID.iron,
    droprate: 3
  },
  {
    id: ITEM_ID.steel,
    droprate: 1
  },
  {
    id: ITEM_ID.magicSword,
    droprate: 5,
    unique: true
  }
];
