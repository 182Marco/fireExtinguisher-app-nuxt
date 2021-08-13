<template>
  <div class="body">
    <App />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "index",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "description of the best company in the world"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    };
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: $text;
  background-color: $bg;
  font-family: "Quicksand", sans-serif;
}
.body {
  margin-bottom: 300px;
}

.container {
  margin-top: 100px;
}
</style>
