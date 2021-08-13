<template>
  <div>
    <button class="open" @click="open = !open">rent</button>
    <div v-show="open" class="modal-window">
      <button class="x" @click="open = !open">x</button>
      <div class="container">
        <div class="calendar-box">
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quis minus vero laboriosam deserunt! Soluta maxime ut nisi libero,
              perferendis
            </p>
            <PlusAndMinus :product="product" />
            <Nuxt-link class="open to-cart-btn" to="/cart">
              <i class="fas fa-shopping-cart"></i>
            </Nuxt-link>
          </div>
          <!-- library specific for vue to make calendars -->
          <!-- <v-date-picker :value="null" color="indigo" is-dark is-range /> -->
          <!-- v-model="range" -->
          <!-- **** -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RentalModal",
  data() {
    return {
      open: false
    };
  },
  props: {
    product: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";
@import "~/assets/scss/animations.scss";
@import "~/assets/scss/mixins.scss";

* {
  background-color: $pal-col;
}

a {
  text-decoration: none;
}

.open {
  display: block;
  text-align: center;
  width: 100%;
  color: white;
  background-color: $brand;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  padding: 4px 0;
  margin-top: 25px;
  &.to-plusAndMinus-btn {
    background-color: $pal-col;
    font-size: 1.3rem;
  }
  &:hover {
    animation: light-pulse 1s;
  }
}

.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $bg;
  z-index: 20;
  @include media-desk-first(s-desktop) {
    padding: 7px;
  }
}
.container {
  margin-top: 250px;
  max-width: 900px;
  padding: 10px 15px;
  border-radius: 5px;
}
.x {
  color: white;
  background-color: $bg;
  font-size: 2.3rem;
  font-weight: 700;
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
}
.calendar-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 0;
  .text {
    padding-right: 50px;
  }
  .vc-is-dark .vc-title {
    color: white;
    z-index: 1;
  }
}

.to-cart-btn {
  i {
    background: transparent;
    color: $title;
  }
  background-color: $bg;
}

.plusAndMinus-btn,
.container,
.to-cart-btn,
.open {
  box-shadow: 3px 3px 14px 8px rgba(0, 0, 0, 0.3);
}
</style>
