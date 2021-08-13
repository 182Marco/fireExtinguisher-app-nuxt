<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/"
              ><img src="~assets/img/logo.png" alt="" />
            </NuxtLink>
          </li>
          <li class="link"><NuxtLink to="/">Home </NuxtLink></li>
        </ul>
        <ul>
          <li class="link cart">
            <NuxtLink to="/cart">
              cart
              <span class="circle-n-items">{{ cartItemsLenght }}</span>
            </NuxtLink>
          </li>
          <li class="hamburger">
            <Hamburger />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["cartItemsLenght"])
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

* {
  background-color: transparent;
  font-size: 1.3rem;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #21232bcc;
}

.container {
  margin: 0 auto;
  position: relative;
  nav {
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding-left: 0;
      li {
        font-weight: 700;
        margin-right: 30px;
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          &:hover {
            color: $title;
          }
          img {
            width: 40px;
          }
        }
      }
    }
  }
}

.cart {
  position: relative;
  .circle-n-items {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 65%;
    left: 95%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: white;
    background-color: $brand;
    font-weight: 700;
    font-size: 0.9rem;
  }
}

// responsive
.link {
  @include media-desk-first(s-phone) {
    display: none;
  }
  &:hover {
    animation: tremble 0.4s;
  }
}

.hamburger {
  display: none;
  @include media-desk-first(s-phone) {
    display: block;
  }
}

.nuxt-link-exact-active {
  color: $brand;
}
</style>
