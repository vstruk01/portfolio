<template>
  <li
    :class="['cases-tag', isActive ? 'active' : '']"
    @click="toggleActive(tagObj.id)"
  >
    {{ tagObj.name }}
  </li>
</template>

<script>
export default {
  name: "CasesTag",
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    tagObj: Object,
  },
  methods: {
    toggleActive(tagId) {
      this.isActive = !this.isActive;
      this.$emit("filter", tagId, this.isActive);
    },
  },
};
</script>

<style lang="scss">
.cases-tag {
  border: 2px solid #b02851;
  padding: 5px 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #000;
  border-radius: 13px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &.active {
    background: #b02851;
    transform: translateY(4px);
    color: #fff;
  }
}

@media not screen {
  .cases-tag {
    &:hover {
      background: #b02851;
      color: #fff;
    }
  }
}
</style>
