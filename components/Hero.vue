<template>
  <div class="container">
    <div class="text-box">
      <h1>Find your Fire Extinguisher</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        fugiat esse aliquam similique maxime modi id sed error amet quas illum
        ullam nam quis, doloremque debitis incidunt officiis impedit
        consequuntur.
      </p>
      <button>Start Loooking</button>
    </div>
    <img
      class="image"
      src="~assets/svg/fire-extinguisher.svg"
      alt="fire extinguisher"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.container {
  display: flex;
  align-items: center;
  margin: 70px auto;
  margin-bottom: 150px;
  padding-right: 20px;
  @include media-desk-first(xl-tablet) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 100px;
  }
}
.text-box {
  display: flex;
  flex-direction: column;
  @include media-desk-first(xl-tablet) {
    margin-bottom: 50px;
  }
}
h1 {
  font-weight: 700;
}

p {
  margin: 20px 0;
}

img {
  width: 200px;
  margin-left: 40px;
  @include media-desk-first(xl-tablet) {
    margin: 0 auto;
  }
}

button {
  background: $brand;
  border-radius: 40px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5rem;
  width: 300px;
  border: none;
  transition: color 0.4s;
}
button:hover {
  animation: pulse 1.3s infinite;
}
</style>
