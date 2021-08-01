<template>
  <ul class="cases-list">
    <CaseItem v-for="caseObj in cases" :caseObj="caseObj" :key="caseObj.id" />
    <CaseItem v-for="caseObj in cases" :caseObj="caseObj" :key="caseObj.id" />
  </ul>
</template>

<script>
import CaseItem from "@/components/home/CaseItem";
import { mapGetters } from "vuex";
export default {
  name: "CasesList",
  components: {
    CaseItem,
  },
  computed: {
    ...mapGetters("casesStore", ["cases"]),
  },
};
</script>

<style lang="scss">
.cases-list {
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .case:not(:nth-child(3n)) {
    margin-right: 30px;
  }
  .case {
    margin-bottom: 50px;
  }
}
</style>
