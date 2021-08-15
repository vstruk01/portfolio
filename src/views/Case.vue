<template>
  <main class="main case-page">
    <GoBackSection />
    <MainInfoSection />
    <GoBackSection />
  </main>
</template>

<script>
import MainInfoSection from "@/components/case/MainInfoSection";
import GoBackSection from "@/components/case/GoBackSection";
export default {
  name: "Case",
  components: {
    MainInfoSection,
    GoBackSection,
  },
};
</script>

<style lang="scss">
.case-page {
  padding: 40px 0;
}
</style>
