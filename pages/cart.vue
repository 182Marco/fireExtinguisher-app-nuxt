<template>
  <div class="container">
    <Item v-for="item in cartNoDuplicate" :key="item.id" :product="item" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  layout: "NoNavLayout",
  computed: {
    ...mapGetters(["cartNoDuplicate"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 30px;
}
</style>
