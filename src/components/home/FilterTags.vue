<template>
  <ul class="filter-tags">
    <CasesTag
      v-for="tag in casesTags"
      @filter="updateTags"
      :tagObj="tag"
      :key="tag.id"
    />
  </ul>
</template>

<script>
import CasesTag from "@/components/home/CasesTag";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "FilterTags",
  data() {
    return {
      selectedTags: new Array(),
    };
  },
  components: {
    CasesTag,
  },
  computed: {
    ...mapGetters("tagsStore", ["casesTags"]),
  },
  methods: {
    ...mapActions(["fetchCases"]),
    updateTags(tagId, bool) {
      if (bool) this.selectedTags.push(tagId);
      else {
        const elementIndex = this.selectedTags.findIndex(
          (item) => item == tagId
        );
        this.selectedTags.splice(elementIndex, 1);
      }
      this.fetchCases(this.selectedTags);
    },
  },
};
</script>

<style lang="scss">
.filter-tags {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 200px;
  li {
    margin: 8px;
  }
}

@media (max-width: 1199px) {
  .filter-tags {
    padding: 0 100px;
  }
}

@media (max-width: 991px) {
  .filter-tags {
    padding: 0;
  }
}
</style>
