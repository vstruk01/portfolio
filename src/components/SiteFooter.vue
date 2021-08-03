<template>
  <footer class="footer">
    <div class="container">
      <div class="content-wrapper">
        <IconsList />
        <h3 class="footer__title">
          I will take on the job and do it efficiently
        </h3>
      </div>
      <span class="footer__rules">All rights reserved</span>
    </div>
  </footer>
</template>

<script>
import IconsList from "@/components/IconsList";
export default {
  name: "SiteFooter",
  components: {
    IconsList,
  },
};
</script>

<style lang="scss">
.footer {
  width: 100vw;
  padding: 50px 0;
  margin-top: 180px;
  background: #fff;
  box-shadow: 0 -40px 110px rgba(#000, 0.035);
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  &__title {
    font-family: "PTSans", sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  &__rules {
    font-family: "Montserrat", sans-serif;
    opacity: 0.8;
  }
}
</style>
