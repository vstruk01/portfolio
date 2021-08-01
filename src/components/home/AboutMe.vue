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
      window.scrollTo(0, $casesHook.offsetTop);
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
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    font-size: 38px;
    line-height: 49px;
    letter-spacing: 0.045em;
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
</style>
