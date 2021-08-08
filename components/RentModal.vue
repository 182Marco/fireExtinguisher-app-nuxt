<template>
  <div class="wrap">
    <b-button id="show-btn btn" @click="showModal">Rent</b-button>

    <b-modal ref="my-modal" hide-footer title="Select dates">
      <div class="calendar-box">
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
            minus vero laboriosam deserunt! Soluta maxime ut nisi libero,
            perferendis
          </p>
        </div>
        <!-- library specific for vue to make calendars -->
        <vc-date-picker
          :value="null"
          color="indigo"
          is-dark
          is-range
          class="my-calendar"
        />
        <!-- **** -->
      </div>
      <b-button id="show-btn btn" variant="outline-danger" @click="showModal"
        >Order</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.wrap {
  background-color: $pal-col;
}

.calendar-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 0;
  .text {
    padding-right: 15px;
  }
  .vc-is-dark .vc-title {
    color: white;
    z-index: 1;
  }
}

button,
.btn {
  background-color: $brand;
  color: white;
  padding: 4px 15px;
  font-weight: 700;
  transition: all 0.2s;
  width: 100%;
  border: none;
  border-radius: 3px;
  &:hover {
    animation: light-pulse 1s;
  }
}

.vc-is-dark .vc-title {
  z-index: 1;
}
</style>
