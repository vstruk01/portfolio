<template>
  <div class="profile">
    <div class="img-wrapper">
      <img class="image" src="../assets/images/Avatar.jpg" alt="Portrait" />
    </div>
    <div class="wrapper">
      <h5 class="profile__name">Polishchuk Valentyn</h5>
      <span class="profile__specialization">Full stack Web Developer</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProfile",
};
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;
  &__name {
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      display: inline-block;
      width: 30px;
      height: 1px;
      background: #b02851;
    }
  }
  &__specialization {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
}
.img-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
  margin-right: 20px;
}
</style>
