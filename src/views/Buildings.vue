<template>
  <div>
    <h4>Buildings</h4>
    <div class="mb-3">
      <Building
        label="Puppy Cage"
        description="A tiny little cage"
        resourceLabel="Puppies"
        :resource="puppies"
        :duration="1"
        :income="10"
        :cost="15"
        @addResource="addPuppies($event)"
      />
    </div>
    <div class="mb-3">
      <Building
        v-if="earnedPuppies >= 100"
        label="Puppy House"
        description="A bit roomier than a cage, with enough space to walk around."
        resourceLabel="Puppies"
        :resource="puppies"
        :duration="2"
        :income="1"
        :cost="100"
        @addResource="addPuppies($event)"
      />
    </div>
    <div class="mb-3">
      <Building
        v-if="earnedPuppies >= 600"
        label="Puppy Coop"
        description="A much nicer puppy home where full puppy families can live."
        resourceLabel="Puppies"
        :resource="puppies"
        :duration="1"
        :income="5"
        :cost="100"
        @addResource="addPuppies($event)"
      />
    </div>
  </div>
</template>

<script>
import Building from "@/components/Building";

import { mapState, mapActions } from "vuex";
export default {
  name: "Buildings",
  data() {
    return {};
  },
  components: {
    Building
  },
  computed: {
    ...mapState(["puppies", "earnedPuppies"])
  },
  methods: {
    ...mapActions(["addPuppies"])
  }
};
</script>
