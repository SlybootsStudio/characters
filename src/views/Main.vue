<template>
  <div class="h4">Main View</div>
  <ThinBar :duration="duration" />
  <LabelBar :duration="duration" />
  <ProgressBar :amount="duration" :max="100" />
  <button @click="upgrade()" class="btn btn-sm btn-primary">Upgrade</button>
</template>

<script>
// @ is an alias to /src
import ThinBar from "@/components/ThinBar.vue";
import LabelBar from "@/components/LabelBar.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "Main",
  data() {
    return {
      duration: 1
    };
  },
  components: {
    ThinBar,
    LabelBar,
    ProgressBar
  },
  methods: {
    upgrade() {
      this.duration = this.duration + 3;
    }
  }
};
</script>
