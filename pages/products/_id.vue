<template>
  <div>
    <div class="container">
      {{ product }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["ProductById"]),
    // ----
    product() {
      return this.ProductById(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
