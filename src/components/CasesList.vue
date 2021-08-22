<template>
  <ul class="cases-list">
    <CaseItem v-for="caseObj in cases" :caseObj="caseObj" :key="caseObj.id" />
  </ul>
</template>

<script>
import CaseItem from "@/components/CaseItem";

export default {
  name: "CasesList",
  props: {
    cases: Array,
  },
  components: {
    CaseItem,
  },
};
</script>

<style lang="scss">
.cases-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  min-height: 450px;
  .case:not(:nth-child(3n)) {
    margin-right: 30px;
  }
  .case {
    margin-bottom: 50px;
  }
}

@media (max-width: 1199px) {
  .cases-list {
    justify-content: space-between;
    padding: 0 80px;
    .case:not(:nth-child(3n)) {
      margin-right: 0;
    }
    .case {
      margin-bottom: 65px;
    }
  }
}

@media (max-width: 991px) {
  .cases-list {
    justify-content: space-between;
    padding: 0;
    .case {
      margin-bottom: 35px;
      width: 345px;
    }
  }
}

@media (max-width: 767px) {
  .cases-list {
    justify-content: space-around;
    .case {
      margin-bottom: 50px;
      width: 380px;
    }
  }
}
</style>
