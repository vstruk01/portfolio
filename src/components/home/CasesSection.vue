<template>
  <section class="cases-section">
    <div class="container">
      <h3 id="cases-hook" class="section-title">A few of my recent projects</h3>
      <CasesList />
    </div>
  </section>
</template>

<script>
import CasesList from "@/components/home/CasesList";
export default {
  name: "CasesSection",
  components: {
    CasesList,
  },
};
</script>

<style lang="scss">
.cases-section {
  .section-title {
    font-family: "PTSans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.045em;
  }
}
</style>
