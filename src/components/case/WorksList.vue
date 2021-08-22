<template>
  <ul class="works">
    <WorkItem
      v-for="work in works"
      :key="work.id"
      :image="work.imgSrc"
      :desk="work.description"
      :isRight="work.id % 2 != 0"
    ></WorkItem>
  </ul>
</template>

<script>
import WorkItem from "@/components/case/WorkItem";
export default {
  name: "WorksList",
  props: {
    works: Array,
  },
  components: {
    WorkItem,
  },
};
</script>

<style lang="scss">
.works {
  margin: 60px 0 0;
}
</style>
