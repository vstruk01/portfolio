<template>
  <div class="contributors">
    <h3 class="contrib">
      Contributors <span>{{ membsCount }}</span>
    </h3>
    <ul class="avatars">
      <li
        class="avatar"
        :style="leftPosition(memb.id)"
        v-for="memb in membs"
        :key="memb.id"
      >
        <a :href="memb.url" class="avatar__url" target="_blank">
          <img
            :src="imageSrc(memb.avatar)"
            alt="ava"
            class="avatar__img image"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contributors",
  props: {
    membs: Array,
  },
  data() {
    return {
      position: 0,
    };
  },
  computed: {
    membsCount() {
      return this.membs.length;
    },
  },
  methods: {
    imageSrc(image) {
      return require(`@/assets/images/contributors/${image}`);
    },
    leftPosition(id) {
      return {
        left: id * 50 + "px",
      };
    },
  },
};
</script>

<style lang="scss">
.contributors {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.contrib {
  font-family: "PTSans", sans-serif;
  font-size: 24px;
  letter-spacing: 0.045em;
  span {
    display: inline-block;
    padding: 7px;
    border-radius: 50px;
    background: rgb(218, 218, 218);
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 10px;
  }
}
.avatars {
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
  height: 80px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
  border: 4px solid #fff;
  transition: 0.22s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  &:not(:last-child) {
    &:hover {
      transform: translateX(-15px);
    }
  }
  &__url {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
