<template>
  <div class="body">
    <AppHeader />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";

export default {
  name: "default",
  //   components: { AppHeader }

  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
          integrity:
            "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";
@import "~/assets/scss/var.scss";
* {
  background-color: $bg;
}
.content {
  margin-top: 150px;
}

.container {
  padding: 0;
}
</style>
