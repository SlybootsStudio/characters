import { RARITY_COLOR } from "./loot";
import { RESOURCE_ID } from "./loot";

export const LOCATIONS = [
  {
    id: "t1mining",
    icon: "mountains",
    rarity: RARITY_COLOR.common,
    name: "Misty Mountains",
    resources: [
      {
        id: RESOURCE_ID.t1stone,
        chance: 100,
        amount: 100
      },
      {
        id: RESOURCE_ID.t2stone,
        chance: 10,
        amount: 100
      }
    ],
    description: "some description"
  }
];
