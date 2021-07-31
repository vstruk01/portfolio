<template>
  <div class="profile">
    <div class="img-wrapper">
      <img class="image" src="../assets/Avatar.jpg" alt="Portrait" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProfile",
};
</script>

<style lang="scss">
.img-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
}
</style>
