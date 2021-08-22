<template>
  <section class="go-back">
    <div class="container">
      <button class="go-back__button" @click="goToHome">
        <span class="go-back__arrows">{{ arrows }}</span
        ><span class="go-back__text">Back to all projects</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "GoBackSection",
  data() {
    return {
      arrows: "<< ",
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
.go-back {
  padding: 45px 0;
  &__button {
    font-family: "PTSans", sans-serif;
    font-weight: 400;
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
    &:hover {
      .go-back__arrows {
        transform: translateX(-6px);
      }
    }
  }
  &__text {
    text-decoration: underline;
  }
  &__arrows {
    display: inline-block;
    margin-right: 8px;
    transition: 0.2s ease-in-out;
  }
}
</style>
