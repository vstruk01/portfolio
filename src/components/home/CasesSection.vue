<template>
  <section class="cases-section">
    <div class="container">
      <h3 id="cases-hook" class="section-title">A few of my recent projects</h3>
      <FilterTags />
      <CasesList :cases="cases" />
    </div>
  </section>
</template>

<script>
import CasesList from "@/components/CasesList";
import FilterTags from "@/components/home/FilterTags";
import { mapGetters } from "vuex";

export default {
  name: "CasesSection",
  components: {
    CasesList,
    FilterTags,
  },
  computed: {
    ...mapGetters(["cases"]),
  },
};
</script>

<style lang="scss">
.cases-section {
  padding-top: 20px;
  .section-title {
    font-size: 40px;
    text-align: center;
  }
  .filter-tags {
    margin-top: 30px;
  }
}

@media (max-width: 767px) {
  .cases-section {
    padding-top: 70px;
    .section-title {
      font-size: 30px;
    }
  }
}
</style>
