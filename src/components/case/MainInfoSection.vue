<template>
  <section class="case-single">
    <div class="container">
      <div class="flex-wrapper">
        <div class="case-single__img">
          <img :src="imageSrc" class="image" alt="case image" />
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
              <a :href="caseObj.siteUrl" target="_blank">Visit the site</a>
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
  &__title {
    font-size: 40px;
  }
  &__desc {
    line-height: 24px;
    margin-top: 30px;
  }
  &__img {
    width: 35%;
    height: 520px;
    border-radius: 36px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
}
.flex-wrapper {
  display: flex;
  justify-content: space-between;
}
.info-wrapper {
  width: 58%;
  display: flex;
  flex-direction: column;
  .flex-wrapper {
    margin-top: 30px;
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
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  margin-top: 60px;
  font-weight: 500;
  span {
    text-decoration: underline;
  }
}

@media (max-width: 1199px) {
  .case-single {
    &__img {
      width: 42%;
      height: 500px;
    }
    .info-wrapper {
      width: 50%;
    }
  }
}

@media (max-width: 991px) {
  .case-single {
    &__img {
      display: none;
    }
    .info-wrapper {
      width: 100%;
    }
  }
}
@media (max-width: 575px) {
  .case-page {
    padding: 0;
  }
  .case-single {
    &__title {
      font-size: 34px;
      letter-spacing: 1.2px;
    }
  }
  .view-project {
    a {
      font-size: 18px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .project-deadline {
    font-size: 18px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .price {
    font-size: 20px;
  }
}

@media (max-width: 430px) {
  .case-single {
    // &__title,
    // &__desc {
    //   text-align: center;
    // }
    .price {
      text-align: center;
      line-height: 27px;
    }
  }
}

@media (max-width: 400px) {
  .info-wrapper {
    .flex-wrapper {
      flex-direction: column;
      align-items: flex-start;
      .project-deadline {
        margin-bottom: 18px;
        order: 1;
      }
      .view-project {
        order: 2;
        a {
          font-size: 22px;
        }
        svg {
          width: 26px;
          height: 26px;
        }
      }
    }
  }
}
</style>
