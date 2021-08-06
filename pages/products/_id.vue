<template>
  <div v-if="product" class="container">
    <div class="hero-container">
      <img :src="require(`@/assets/img/${product.img}`)" :alt="product.name" />
      <div class="info-box">
        <h1>{{ product.title }}</h1>
        <p class="snippet">{{ product.snippet }}</p>
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
  created() {
    console.log(this.$route.params.id);
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

// typography
h1 {
  font-size: 1.75rem;
  font-weight: 700;
  background-color: $pal-col;
  color: $bg;
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
  justify-content: space-between;
  img {
    border-radius: 5px;
    width: 59%;
    height: 25rem;
  }
  .info-box {
    width: 39%;
    background-color: $pal-col;
    padding: 1rem;
    border-radius: 0.5rem;
    .snippet {
      color: $bg;
      background-color: $pal-col;
      margin-top: 1rem;
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
  color: $text;
}
</style>
