<template>
  <section class="skills-section me">
    <div class="container">
      <div class="left-side">
        <div class="me-outline">
          <img
            src="../../assets/images/me.webp"
            alt="Valentyn Polishchuk"
            class="me__img"
          />
        </div>
        <div class="me-block me__skills">
          <h6 class="me-block__title">My skills</h6>
          <p class="me-block__text">
            Web application, design Figma, WordPress, Tilda, SEO, layout, 3D
            modelling Blender, Webpack, git, Docker, SMM.
          </p>
        </div>
        <div class="me-block me__langs">
          <h6 class="me-block__title">Skills range</h6>
          <ul class="skills-list">
            <li class="skill-item" v-for="skill in skills" :key="skill.id">
              <div class="skill-item__name">
                <span>{{ skill.name }}</span>
              </div>
              <div class="skill-range">
                <span class="line"></span>
                <span class="dot" :style="`left: ${skill.value}%`"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-side">
        <div class="who-i-am">
          <h2 class="me__name">Polishchuk Valentyn</h2>
          <p class="me__specialization">Full stack Web Developer</p>
        </div>
        <div class="me-block me__about">
          <h6 class="me-block__title">About me</h6>
          <p class="me-block__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            iaculis facilisis felis id hendrerit. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Ut malesuada
            eget felis nec malesuada.
          </p>
        </div>
        <div class="me-block me__education">
          <h6 class="me-block__title">Education</h6>
          <ul class="me-block__list">
            <li class="list-item">
              (2018 - 2021) TVC LNTU - computer injenering
            </li>
            <li class="list-item">(2020) Oxit School - Wordpress developing</li>
            <li class="list-item">(2021 - 2023) LNTU - ciber security</li>
          </ul>
        </div>
        <div class="me-block me__works">
          <h6 class="me-block__title">Work experience</h6>
          <ul class="me-block__list">
            <li class="list-item">
              WordPress developer (Internet Devels) - April 2021 - August 2021
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
        {
          id: 0,
          name: "JS",
          value: 80,
        },
        {
          id: 1,
          name: "Vue",
          value: 75,
        },
        {
          id: 2,
          name: "WordPress",
          value: 60,
        },
        {
          id: 3,
          name: "HTML",
          value: 92,
        },
        {
          id: 4,
          name: "CSS3/SCSS",
          value: 85,
        },
        {
          id: 5,
          name: "Design",
          value: 35,
        },
        {
          id: 6,
          name: "3D",
          value: 20,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skills-section {
  margin-top: 40px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .left-side,
  .right-side {
    flex: 0 0 46%;
  }
}
.me {
  .me-outline {
    width: 100%;
    padding: 65px 0 0 65px;
    margin-bottom: 80px;
  }
  &__img {
    width: 100%;
    border-radius: 6px;
  }
  .who-i-am {
    margin: 140px 0;
  }
  &__name {
    font-family: "PTSans", sans-serif;
    font-size: 44px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  &__specialization {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
  }
  .me-block {
    margin-top: 50px;
    &__title {
      font-family: "PTSans", sans-serif;
      font-size: 24px;
      margin-bottom: 16px;
      font-weight: 700;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 28px;
        height: 1px;
        background: #b02851;
      }
    }
    &__text,
    &__list {
      font-family: "Montserrat", sans-serif;
      padding-left: 32px;
      line-height: 24px;
      letter-spacing: 0.5px;
    }
    .list-item {
      margin-bottom: 8px;
    }
  }
  .skills-list {
    padding-left: 32px;
  }
  .skill-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    &__name {
      font-family: "PTSans", sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
      border: 1px solid #b02851;
      padding: 13px;
      letter-spacing: 2px;
      border-radius: 15px;
    }
    .skill-range {
      width: 45%;
      position: relative;
      .line {
        display: inline-block;
        width: 100%;
        height: 2px;
        background: rgba(#000, 0.5);
      }
      .dot {
        display: inline-block;
        position: absolute;
        top: calc(50% - 2px);
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background: #b02851;
      }
    }
  }
}
</style>
