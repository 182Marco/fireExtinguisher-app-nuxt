<template>
  <div>
    <h3>Customer reviews</h3>
    <div v-if="!$fetchState.pending">
      <ReviewCard
        v-for="reviewer in reviewers.results"
        :key="`review${reviewer.login.uuid}`"
        :review="reviewer"
        class="calendar"
      />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: [],
      resQantity: 5
    };
  },
  async fetch() {
    this.reviewers = await fetch(
      `https://randomuser.me/api/?results=${this.resQantity}`
    ).then(r => r.json());
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/var.scss";

h3 {
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: 700;
  color: $title;
}
</style>
