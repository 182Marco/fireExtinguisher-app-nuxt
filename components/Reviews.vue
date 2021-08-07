<template>
  <div>
    <h3>Customer reviews</h3>

    <div v-if="!$fetchState.pending">
      <ReviewCard
        v-for="reviewer in reviewers"
        :key="`review_${reviewer.login.uud}`"
        :review="reviewer"
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
    ).then(r => r.json().results);
  }
};
</script>

<style lang="scss" scoped></style>
