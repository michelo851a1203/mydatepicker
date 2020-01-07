<template>
  <div id="app">
    <calender></calender>
  </div>
</template>

<script>
import calender from "@/components/calender.vue";

export default {
  name: "app",
  components: {
    calender
  }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
