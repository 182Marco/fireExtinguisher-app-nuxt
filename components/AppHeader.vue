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
          <li class="link"><NuxtLink to="/About">About </NuxtLink></li>
          <li class="link"><NuxtLink to="/Contact">Contact </NuxtLink></li>
          <li class="hamburger">
            <Hamburger />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

header {
  margin-bottom: 110px;
}

header,
nav,
ul,
li,
a,
img {
  background-color: $pal-col;
  font-size: 1.3rem;
}

.container {
  margin: 0 auto;
  position: relative;
  nav {
    padding: 25px 0;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding-left: 0;
      li {
        font-weight: 700;
        margin-right: 30px;
        &.link {
          @include media-desk-first(tablet) {
            display: none;
          }
        }
        &.hamburger {
          display: none;
          position: absolute;
          right: 0;
          transform: translateY(-50%);
          top: 50%;
          @include media-desk-first(tablet) {
            display: block;
          }
          &:hover {
            animation: none;
          }
        }
        &:hover {
          animation: tremble 0.4s;
          cursor: pointer;
        }
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          img {
            width: 40px;
          }
        }
      }
    }
  }
}

.nuxt-link-exact-active {
  color: $brand;
}
</style>
