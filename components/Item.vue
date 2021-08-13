<template>
  <div class="container">
    <div class="img-box">
      <img :src="require(`@/assets/img/${product.img}`)" alt="product.title" />
    </div>
    <div class="text-container">
      <h3>{{ product.title }}</h3>
      <p>{{ trimNoCuttingWords(product.description) }}</p>
      <PlusAndMinus :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      maxLength: 300
    };
  },
  props: { product: Object },
  methods: {
    trimNoCuttingWords(string) {
      //trim the string to the maximum length
      let trimmedStr = string.substr(0, this.maxLength);
      //re-trim if we are in the middle of a word
      return `${(trimmedStr = trimmedStr.substr(
        0,
        Math.min(trimmedStr.length, trimmedStr.lastIndexOf(" "))
      ))}...`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.container {
  filter: brightness(0.85);
  box-shadow: 2px 2px 10px 6px rgba(0, 0, 0, 0.3);
  padding: 20px 15px;
  border-radius: 5px;
  display: flex;
  @include media-desk-first(desktop) {
    flex-direction: column;
    padding-right: 20px;
  }
  margin: 20px auto;
  .text-container {
    padding-left: 25px;
    @include media-desk-first(desktop) {
      padding-left: 0;
      margin-top: 15px;
    }
    h3 {
      color: $title;
      font-weight: 700;
      @include media-desk-first(desktop) {
        font-size: 1.3rem;
        text-align: center;
      }
    }
    p {
      margin: 10px 0;
      font-size: 0.8rem;
      color: $text;
    }
    .quantity,
    strong {
      color: $title;
    }
  }
}
.img-box {
  @include media-desk-first(desktop) {
    display: flex;
    justify-content: center;
  }
  img {
    width: 270px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>
