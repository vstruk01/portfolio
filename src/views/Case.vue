<template>
  <main class="main case-page">
    <GoBackSection />
    <MainInfoSection :caseObj="caseSingle($route.params.id)" />
    <GoBackSection />
  </main>
</template>

<script>
import MainInfoSection from "@/components/case/MainInfoSection";
import GoBackSection from "@/components/case/GoBackSection";
import { mapGetters } from "vuex";

export default {
  name: "Case",
  components: {
    MainInfoSection,
    GoBackSection,
  },
  computed: {
    ...mapGetters(["caseSingle"]),
  },
};
</script>

<style lang="scss">
.case-page {
  padding: 20px 0;
}
</style>
