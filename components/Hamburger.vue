<template>
  <div @click="open">
    <div class="hamburger">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.hamburger {
  width: 27px;
  margin-right: 0;
  background-color: $pal-col;
  cursor: pointer;
  &:hover .line {
    background-color: $brand;
  }
  .line {
    display: block;
    width: 100%;
    height: 4px;
    background-color: $bg;
    border-radius: 5px;
    margin-top: 4px;
    transition: background 0.3s;
  }
}
</style>
