<template>
  <h1>Main View</h1>
  <ThinBar :duration="duration" />
  <LabelBar :duration="duration" />
  <button @click="upgrade()" class="btn btn-sm btn-primary">Upgrade</button>
</template>

<script>
// @ is an alias to /src
import ThinBar from "@/components/ThinBar.vue";
import LabelBar from "@/components/LabelBar.vue";

export default {
  name: "Main",
  data() {
    return {
      duration: 1
    };
  },
  components: {
    ThinBar,
    LabelBar
  },
  methods: {
    upgrade() {
      this.duration = this.duration + 3;
    }
  }
};
</script>
