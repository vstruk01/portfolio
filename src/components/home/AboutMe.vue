<template>
  <div class="about">
    <div class="container">
      <h2 class="about__title">I know how to do it really well</h2>
      <ul class="skills">
        <li class="skill">Landing page or multi page site</li>
        <li class="skill">WordPress or Tilda site</li>
        <li class="skill">Web application</li>
        <li class="skill">Design of your site</li>
        <!-- <li class="skill">3D models in Blender</li> -->
      </ul>
      <ActionButton @tap="goToCases">Look my projects</ActionButton>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/UI/ActionButton";
export default {
  name: "AboutMe",
  components: {
    ActionButton,
  },
  methods: {
    goToCases() {
      const $casesHook = document.getElementById("cases-hook");
      window.scrollTo(0, $casesHook.offsetTop - 20);
    },
  },
};
</script>

<style lang="scss">
.about {
  height: calc(100% - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    font-size: 38px;
    line-height: 49px;
    margin-bottom: 16px;
  }
  .skills {
    margin-bottom: 60px;
  }
  .skill {
    position: relative;
    padding-left: 25px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.045em;
    &::before {
      content: "-";
      position: absolute;
      left: 10px;
      top: 0;
    }
  }
}

@media (max-width: 991px) {
  .about {
    &__title {
      font-size: 32px;
    }
    .skill {
      font-size: 18px;
      line-height: 29px;
    }
  }
}

@media (max-width: 767px) {
  .about {
    align-items: center;
    &__title {
      font-size: 30px;
      text-align: center;
      margin-bottom: 25px;
      line-height: 34px;
    }
    .skills {
      margin-bottom: 55px;
    }
    .skill {
      font-size: 16px;
      line-height: 28px;
      padding-left: 0;
      text-align: center;
      margin-bottom: 10px;
      &::before {
        content: "";
        display: inline-block;
        width: 28px;
        height: 1px;
        background: #b02851;
        top: 32px;
        left: calc(50% - 14px);
      }
    }
  }
  .action-button {
    display: block;
    margin: 0 auto;
  }
}
</style>
