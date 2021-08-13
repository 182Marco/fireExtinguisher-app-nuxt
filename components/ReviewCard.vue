<template>
  <div class="review-card">
    <div>
      <img :src="review.picture.large" :alt="review.name" />
    </div>
    <div class="text-container">
      <p class="author">
        <em>{{ review.login.username }}</em>
      </p>
      <p class="review-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        quam magni beatae possimus debitis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.review-card {
  margin-bottom: 30px;
  display: flex;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
  .text-container {
    padding-left: 15px;
  }
  .review-text {
    color: $text;
    line-height: 1.1rem;
  }
  .author {
    em {
      color: $smallTitle;
    }
    font-weight: 700;
    margin: 0;
  }
}
</style>
