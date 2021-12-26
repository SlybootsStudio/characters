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

export const SET_ID = {
  goblin: 0
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
  },
  {
    id: ITEM_ID.goblinSword,
    label: "Goblin Sword",
    rarity: RARITY.epic,
    unique: true
  },
  {
    id: ITEM_ID.goblinSword2,
    label: "Goblin Sword II",
    rarity: RARITY.epic,
    unique: true
  },
  {
    id: ITEM_ID.goblinSword3,
    label: "Goblin Sword III",
    rarity: RARITY.epic,
    unique: true
  }
];

export const SETS = [
  {
    id: SET_ID.goblin,
    items: [
      {
        id: ITEM_ID.goblinSword,
        droprate: 1,
        unique: true
      },
      {
        id: ITEM_ID.goblinSword2,
        droprate: 1,
        unique: true
      },
      {
        id: ITEM_ID.goblinSword3,
        droprate: 1,
        unique: true
      }
    ]
  }
];

export const LootBox = [
  {
    id: ITEM_ID.stone,
    quantityMin: 3,
    quantityMax: 5,
    droprate: 5
  },
  {
    id: ITEM_ID.iron,
    droprate: 3
  },
  {
    id: ITEM_ID.steel,
    droprate: 2
  },
  {
    id: ITEM_ID.magicSword,
    droprate: 40,
    unique: true
  }
];

export const LootBox2 = [
  {
    id: ITEM_ID.stone,
    quantityMin: 3,
    quantityMax: 5,
    droprate: 5
  },
  {
    id: ITEM_ID.iron,
    droprate: 3
  },
  {
    id: ITEM_ID.steel,
    droprate: 2
  },
  {
    id: ITEM_ID.magicSword,
    droprate: 1,
    unique: true
  }
];
