<template>
  <div>
    <h1>Buildings</h1>
    <Building
      label="Puppy Cage"
      description="A tiny little cage"
      resourceLabel="Puppies"
      :resource="puppies"
      :duration="10"
      :income="1"
      :cost="15"
      @addResource="addPuppies($event)"
    />
  </div>
</template>

<script>
import Building from "@/components/Building";
export default {
  name: "Main",
  data() {
    return {
      puppies: 100
    };
  },
  components: {
    Building
  },
  methods: {
    addPuppies(quantity) {
      this.puppies += quantity;
    }
  }
};
</script>
