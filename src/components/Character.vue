<template>
  <div class="d-flex w-100 bg-secondary border">
    <div class="card w-100">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-sm-4 mb-2">
            <span class="icon me-2">
              <Icon icon="miner" w="30px" h="30px" />
            </span>
            <span class="fw-bold">{{ name }}</span> ({{ label }})
          </div>
          <div class="col-12 col-sm-4 justify-content-center mb-2">
            <!-- style="/*width: 150px; margin: 0 auto*/" -->
            <div class="mt-1">
              <ProgressBar
                :label="`Level ${level}`"
                :amount="progressToLevel"
                :max="experienceToLevel"
                :showProgress="false"
              />
            </div>
          </div>
          <div class="col-12 col-sm-4 text-end mb-2">
            <button class="btn btn-secondary btn-sm">
              Skill Tree <span class="badge bg-primary">3</span>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body p-0 ps-3 me-3">
        <div class="row">
          <div class="col-12 col-sm-4 m-0 p-0 mb-3">
            <table class="table table-striped mb-0">
              <thead>
                <th>Resource</th>
                <th>Chance</th>
                <th>Amount</th>
              </thead>
              <tbody>
                <tr>
                  <td>t1 stone</td>
                  <td>100%</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>t1 stone</td>
                  <td>100%</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>t1 stone</td>
                  <td>100%</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col text-center">
            <div class="d-none">Location</div>
            <button class="btn btn-success">
              <Icon icon="mountains" w="100%" h="100%" />
            </button>
            <div style="font-size: 0.85em">Misty Mountains</div>
          </div>
          <div class="col text-center">
            <div class="d-none">Tool</div>
            <button class="btn btn-primary">
              <Icon icon="pickaxe" w="100%" h="100%" />
            </button>
            <div style="font-size: 0.85em">Iron Pickaxe</div>
          </div>
          <div class="col text-center">
            <div class="d-none">Trinket</div>
            <button class="btn btn-primary">
              <Icon icon="ring" w="100%" h="100%" />
            </button>
            <div style="font-size: 0.85em">Dwarven Greed</div>
          </div>
          <div class="col text-center">
            <div class="d-none">Skill 1</div>
            <button class="btn btn-info">
              <Icon icon="ore" w="100%" h="100%" />
            </button>
            <div style="font-size: 0.85em">Increased Yield</div>
          </div>
          <div class="col text-center">
            <div class="d-none">Skill 2</div>
            <button class="btn btn-info">
              <Icon icon="gems" w="100%" h="100%" />
            </button>
            <div style="font-size: 0.85em">Gemfinding</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import Icon from "@/components/Icon";

import { LOCATIONS } from "@/data/locations.js";

import { mapState } from "vuex";

export default {
  name: "Character",
  components: {
    ProgressBar,
    Icon
  },
  data() {
    return {
      locations: LOCATIONS,
      name: "Uther",
      label: "Miner",
      experience: 120,
      experienceBase: 5,
      experienceScaling: 1.25
    };
  },
  props: {},
  computed: {
    ...mapState(["selectedArea"]),
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
    }
  }
};
</script>

<style scoped>
.icon {
  margin-left: -15px;
}
</style>
