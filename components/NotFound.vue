<template>
  <div>
    <h1>Page Not Found</h1>
    <img :src="require('@/assets/img/notfound2.png')" alt="image not found" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  width: 50rem;
  h1 {
    font-size: 7.5rem;
  }
  img {
    width: 15rem;
    margin: 0 auto;
  }
}
</style>
