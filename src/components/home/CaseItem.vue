<template>
  <li class="case">
    <div class="case__img">
      <img :src="imageSrc(caseObj.preview)" alt="case Image" class="image" />
      <h3 class="case__title">{{ caseObj.name }}</h3>
    </div>
    <div class="content">
      <p class="case__excerpt">{{ caseObj.excerpt }}</p>
      <button class="case__more">Read more</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "CaseIteam",
  props: {
    caseObj: Object,
  },
  methods: {
    imageSrc(preview) {
      return require(`@/assets/images/cases/${preview}`);
    },
  },
};
</script>

<style lang="scss">
.case {
  width: 360px;
  background: #fff;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
    .case__img {
      img {
        transform: scale(1.15);
      }
    }
  }
  &__img {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    background: #000;
    img {
      opacity: 0.7;
      transition: 0.25s ease-in-out;
      z-index: 0;
    }
  }
  &__title {
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 0.045em;
    color: #ffffff;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .content {
    padding: 15px;
  }
  &__excerpt {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.045em;
  }
  &__more {
    padding: 0;
    margin: 15px 0;
    position: relative;
    background: transparent;
    font-family: "PTSans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.045em;
    text-decoration: underline;
    &::after {
      content: ">>";
      position: absolute;
      right: -25px;
      top: 1px;
      transition: 0.2s ease;
    }
    &:hover {
      &::after {
        transform: translateX(6px);
      }
    }
  }
}
</style>
