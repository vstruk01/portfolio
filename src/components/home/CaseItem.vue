<template>
  <li class="case">
    <div class="case__img">
      <img :src="imageSrc(caseObj.preview)" alt="case Image" class="image" />
      <h3 class="case__title">{{ caseObj.name }}</h3>
      <ul class="case-tags">
        <li
          class="case__tag"
          v-for="tegObj in cardTags(caseObj.tags)"
          :key="tegObj.id"
        >
          {{ tegObj.name }}
        </li>
      </ul>
    </div>
    <div class="content">
      <p class="case__excerpt">{{ caseObj.excerpt }}</p>
      <button class="case__more">Read more</button>
      <div class="other-info">
        <div class="visit">
          <IconBase><Show /></IconBase>
          <a :href="caseObj.siteUrl" class="case__url">visit site</a>
        </div>
        <div class="deadline">
          <IconBase><Clock /></IconBase>
          <span class="case__time">{{ caseObj.time }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import Show from "@/components/icons/Show";
import Clock from "@/components/icons/Clock";
import { mapGetters } from "vuex";
export default {
  name: "CaseIteam",
  components: {
    IconBase,
    Show,
    Clock,
  },
  props: {
    caseObj: Object,
  },
  computed: {
    ...mapGetters("tagsStore", ["cardTags"]),
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
  user-select: none;
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
  .case-tags {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  &__tag {
    padding: 4px 7px;
    background: #fff;
    margin: 5px;
    border-radius: 9px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.2);
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
  .other-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    .visit,
    .deadline {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .visit {
      svg {
        transition: 0.25s;
      }
      &:hover {
        svg {
          transform: scaleY(0);
        }
      }
    }
  }
  &__url,
  &__time {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.045em;
    margin-left: 5px;
  }
  &__url {
    color: #000;
    text-decoration: underline;
  }
}

@media (max-width: 400px) {
  .case {
    &__tag {
      font-size: 12px;
      border-radius: 7px;
    }
  }
}
</style>
