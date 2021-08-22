<template>
  <main id="case-views" class="main case-page">
    <GoBackSection />
    <MainInfoSection :caseObj="dataObj" />
    <PurposeSection
      :purpose="dataObj.purpose"
      :solution="dataObj.solution"
      :works="dataObj.worksFields"
    />
    <RelatedCases :currentId="dataObj.id" />
    <GoBackSection />
  </main>
</template>

<script>
import MainInfoSection from "@/components/case/MainInfoSection";
import GoBackSection from "@/components/case/GoBackSection";
import PurposeSection from "@/components/case/PurposeSection";
import RelatedCases from "@/components/case/RelatedCases";
import { mapGetters } from "vuex";

export default {
  name: "Case",
  components: {
    MainInfoSection,
    PurposeSection,
    GoBackSection,
    RelatedCases,
  },
  computed: {
    ...mapGetters(["caseSingle"]),
    dataObj() {
      return this.caseSingle(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
.case-page {
  padding: 20px 0;
}
</style>
