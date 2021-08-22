<template>
  <li class="work">
    <div class="work__img" :style="{ order: setRight() }">
      <img :src="imageSrc(image)" alt="Work Image" class="image" />
    </div>
    <p class="work__desk">{{ desk }}</p>
  </li>
</template>

<script>
export default {
  name: "WorkItem",
  props: {
    image: String,
    desk: String,
    isRight: Boolean,
  },
  methods: {
    setRight() {
      return this.isRight ? 2 : 0;
    },
    imageSrc(preview) {
      return require(`@/assets/images/cases/${preview}`);
    },
  },
};
</script>

<style lang="scss">
.work {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  &__img {
    width: 46%;
    height: 340px;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
  }
  &__desk {
    width: 40%;
    font-family: "PTSans", sans-serif;
    font-weight: 400;
    line-height: 28px;
    font-size: 20px;
  }
}

@media (max-width: 767px) {
  .work {
    &__desk {
      width: 45%;
    }
  }
}

@media (max-width: 575px) {
  .work {
    flex-direction: column;
    margin-bottom: 90px;
    &__img {
      width: 95%;
      order: 1;
      margin-bottom: 15px;
    }
    &__desk {
      width: 95%;
      order: 2;
    }
  }
}
</style>
