<template>
  <div class="review-card">
    <div>
      <img :src="review.picture.large" :alt="review.name" />
    </div>
    <div class="text-container">
      <h6>{{ review.login.username }}</h6>
      <p>
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
  margin-top: 1.5rem;
  height: 4rem;
  display: flex;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
  .text-container {
    margin-left: 2rem;
  }
  p {
    color: $text;
  }
}
</style>
