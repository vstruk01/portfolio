<template>
  <section class="case-single">
    <div class="container">
      <div class="flex-wrapper">
        <div class="image">
          <img :src="imageSrc" class="case-single__img" alt="case image" />
        </div>
        <div class="info-wrapper">
          <h1 class="case-single__title">
            {{ caseObj.name }}
          </h1>
          <p class="case-single__desc">
            {{ caseObj.description }}
          </p>
          <Contributors :membs="caseObj.contributors" />
          <div class="flex-wrapper">
            <div class="view-project">
              <IconBase><Show /></IconBase>
              <a href="#" target="_blank">Visit the site</a>
            </div>
            <div class="project-deadline">
              <IconBase><Clock /></IconBase>
              <span>Project deadline: {{ caseObj.time }}</span>
            </div>
          </div>
          <h4 class="price">
            The price of such a project is <span>{{ caseObj.price }}</span>
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Contributors from "@/components/case/Contributors";
import IconBase from "@/components/icons/IconBase";
import Show from "@/components/icons/Show";
import Clock from "@/components/icons/Clock";

export default {
  name: "MainInfoSection",
  components: {
    Contributors,
    Clock,
    Show,
    IconBase,
  },
  props: {
    caseObj: Object,
  },
  computed: {
    imageSrc() {
      return require(`@/assets/images/cases/${this.caseObj.image}`);
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
  .flex-wrapper {
    margin: 30px 0;
    align-items: center;
  }
}
.view-project {
  display: flex;
  align-items: center;
  a {
    color: #000;
    text-decoration: underline;
    font-size: 22px;
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transition: 0.2s;
  }
  &:hover {
    svg {
      transform: scaleY(0);
    }
  }
}
.project-deadline {
  display: flex;
  align-items: center;
  font-size: 22px;
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transition: 0.2s;
  }
}
.price {
  font-family: "PTSans", sans-serif;
  font-size: 22px;
  span {
    text-decoration: underline;
  }
}
</style>
