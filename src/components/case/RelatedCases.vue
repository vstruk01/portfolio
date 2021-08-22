<template>
  <section class="related">
    <div class="container">
      <h2 class="related__title">Other Cases</h2>
      <CasesList :cases="relatedCases" />
    </div>
  </section>
</template>

<script>
import CasesList from "@/components/CasesList";
import { mapGetters } from "vuex";
export default {
  name: "RelatedCases",
  props: {
    currentId: Number,
  },
  components: {
    CasesList,
  },
  computed: {
    ...mapGetters(["cases"]),
    relatedCases() {
      let randCases = [];
      const filteredCases = this.cases.filter(
        (item) => item.id != this.currentId
      );

      while (randCases.length < 3) {
        let randNum = Math.floor(Math.random() * filteredCases.length);

        if (randCases.includes(filteredCases[randNum])) continue;
        else randCases.push(filteredCases[randNum]);
      }

      return randCases;
    },
  },
};
</script>

<style lang="scss">
.related {
  margin: 120px 0 0;
  &__title {
    margin-bottom: 30px;
    font-family: "PTSans", sans-serif;
    font-size: 40px;
    letter-spacing: 2px;
    text-align: center;
  }
}
</style>
