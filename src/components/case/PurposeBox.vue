<template>
  <div class="purpose-box">
    <div class="purpose-box__icon"><slot></slot></div>
    <h4 class="purpose-box__title">{{ boxTitle }}</h4>
    <p class="purpose-box__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "PBox",
  props: {
    boxTitle: {
      type: String,
      default: "Main problem",
    },
    text: String,
  },
};
</script>

<style lang="scss">
.purpose-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 380px;
  &__icon {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transition: 0.2s ease-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &__title {
    font-size: 24px;
    margin: 15px 0;
  }
  &__text {
    font-size: 18px;
    line-height: 26px;
  }
}
</style>
