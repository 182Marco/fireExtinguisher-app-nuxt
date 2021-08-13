<template>
  <div class="container">
    <a @click="backOnePage">Go Back</a>
    <nuxt-link class="home" to="/">Home</nuxt-link>
    <nuxt />
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";

export default {
  name: "default",
  methods: {
    backOnePage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
@import "~/assets/css/main.scss";

.container {
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
  a {
    display: inline-block;
    font-weight: 700;
    background-color: $brand;
    color: white;
    border-radius: 3px;
    padding: 4px 10px;
    transition: color 0.3s;
    cursor: pointer;
    &:hover {
      color: white;
      animation: tremble 0.4s;
    }
    &.home {
      margin-left: 30px;
    }
  }
}
</style>
