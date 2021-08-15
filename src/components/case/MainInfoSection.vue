<template>
  <section class="case-single">
    <div class="container">
      <div class="flex-wrapper">
        <div class="image">
          <img :src="imageSrc" class="case-single__img" alt="case image" />
        </div>
        <div class="info-wrapper">
          <h1 class="case-single__title">
            {{ caseSingle($route.params.id).name }}
          </h1>
          <p class="case-single__desc">
            {{ caseSingle($route.params.id).description }}
          </p>
          <Contributors :membs="caseSingle($route.params.id).contributors" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Contributors from "@/components/case/Contributors";

export default {
  name: "MainInfoSection",
  components: {
    Contributors,
  },
  computed: {
    ...mapGetters(["caseSingle"]),
    imageSrc() {
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
  }
  &__title {
    font-family: "PTSans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  &__desc {
    font-family: "Montserrat", sans-serif;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 30px;
  }
}
.flex-wrapper {
  display: flex;
  justify-content: space-between;
}
.image {
  width: 35%;
  height: 520px;
  border-radius: 36px;
  position: relative;
  overflow: hidden;
}
.info-wrapper {
  width: 58%;
  display: flex;
  flex-direction: column;
}
</style>
