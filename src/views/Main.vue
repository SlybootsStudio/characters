<template>
  <div class="row">
    <div class="col-8 pe-0">
      <Character />
    </div>
    <div class="col-4">
      <SkillTree />
      <LocationsList />
      <Inventory type="tools" />
      <Inventory type="trinkets" />
      <Skills filter="active" />
    </div>
  </div>
</template>

<script>
import Character from "@/components/Character";
import Skills from "@/components/Skills";

import { mapState } from "vuex";
export default {
  name: "Main",
  components: {
    Character,
    Skills
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectedFilter"])
  },
  methods: {}
};
</script>
