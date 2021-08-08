<template>
  <div v-if="product" class="container">
    <div class="hero-container">
      <img :src="require(`@/assets/img/${product.img}`)" :alt="product.name" />
      <div class="info-box">
        <h1>{{ product.title }}</h1>
        <p class="snippet">{{ product.snippet }}</p>
        <RentModal />
      </div>
    </div>
    <div class="whats-included-box">
      <div class="included-container">
        <h6>Super Effective</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div class="included-container">
        <h6>Clean & Tidy</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div class="included-container">
        <h6>Cancel Anytime</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
      <div class="included-container">
        <h6>Satisfaction Guaranteed</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dolorem.
        </p>
      </div>
    </div>
    <div class="description-container">
      <p>
        {{ product.description }}
      </p>
    </div>
    <Reviews />
  </div>
  <div v-else class="container padding">
    <NotFound />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["ProductById"]),
    // ----
    product() {
      return this.ProductById(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";
@import "~/assets/scss/mixins.scss";
// typography
h1 {
  font-size: 1.75rem;
  font-weight: 700;
  background-color: $pal-col;
}
h6 {
  font-size: 1.15rem;
  font-weight: 400;
}

button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}

.hero-container {
  display: flex;
  @include media-desk-first(tablet) {
    flex-direction: column;
  }

  img {
    width: 50%;
    height: 35vh;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 30px;
    @include media-desk-first(tablet) {
      margin-bottom: 15px;
    }
  }

  .info-box {
    flex-grow: 1;
    background-color: $pal-col;
    padding: 1rem;
    border-radius: 0.5rem;
    .snippet {
      background-color: $pal-col;
      margin-top: 1rem;
      margin: 20px 0;
    }
  }
}

.whats-included-box {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
  .description-container {
    border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
  .included-container {
    margin-top: 1.5rem;
  }
}

.description-container {
  margin-top: 1.5rem;
}
</style>
