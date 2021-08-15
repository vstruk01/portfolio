<template>
  <section class="case-single">
    <div class="container">
      <div class="flex-wrapper">
        <div class="image">
          <img :src="imageSrc" class="case-single__img" alt="case image" />
        </div>
        <div class="info-wrapper"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainInfoSection",
  computed: {
    ...mapGetters(["caseSingle"]),
    imageSrc() {
      //console.log(this.$route.params.image);
      return require(`@/assets/images/cases/${
        this.caseSingle(this.$route.params.id).image
      }`);
    },
  },
};
</script>

<style lang="scss" scoped>
.case-single {
  width: 100%;
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0.85);
    transition: 0.2s ease-in-out;
    box-shadow: 0 6px 20px rgba(#000, 0.5);
    border-radius: 40px;
  }
}
.flex-wrapper {
  display: flex;
  justify-content: space-between;
}
.image {
  width: 38%;
  height: 540px;
  border-radius: 40px;
  position: relative;
  //overflow: hidden;
  border: 1px solid #000;
  &:hover {
    img {
      transform: scale(1.01);
      box-shadow: 0 10px 25px rgba(#000, 0.55);
    }
  }
}
</style>
