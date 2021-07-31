<template>
  <header class="header">
    <div class="container">
      <PortfolioProfile />
      <IconsList />
    </div>
  </header>
</template>

<script>
import PortfolioProfile from "@/components/PortfolioProfile";
import IconsList from "@/components/IconsList";
export default {
  name: "SiteHeader",
  components: {
    PortfolioProfile,
    IconsList,
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 25px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
