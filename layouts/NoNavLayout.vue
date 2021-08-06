<template>
  <div class="container">
    <NuxtLink to="/">Go Back</NuxtLink>
    <nuxt />
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";

export default {
  name: "default"
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.container {
  max-width: 960px;
  margin: 150px auto;
  text-align: center;
  a {
    color: $appleLinkCol;
  }
}
</style>
