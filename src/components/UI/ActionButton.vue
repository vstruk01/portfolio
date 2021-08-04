<template>
  <button
    class="action-button"
    :style="{ border: `2px solid ${border}`, color: color }"
    @click="$emit('tap')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    border: {
      type: String,
      default: "#b02851",
    },
    color: {
      type: String,
      default: "#000",
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 1199px) {
  .action-button {
    &:hover {
      background: #b02851;
      color: #fff !important;
    }
  }
}

.action-button {
  font-family: "PTSans", sans-serif;
  font-weight: 400;
  padding: 15px 15px;
  font-size: 18px;
  background: transparent;
  transition: 0.2s;
  border-radius: 18px;
  cursor: pointer;
}
</style>
