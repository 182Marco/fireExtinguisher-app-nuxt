<template>
  <div>
    <Hero />
    <LargeCardDisplay
      v-for="info in largeCardInfo"
      :key="`info_${info.id}`"
      :info="info"
    />
    <LargeCardDisplay
      v-for="info in smallCardInfo"
      :key="`info_small_${info.id}`"
      :info="info"
      :small="true"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";

export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";
// font
</style>
