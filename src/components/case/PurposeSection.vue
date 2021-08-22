<template>
  <section class="purpose">
    <div class="container">
      <div class="boxes">
        <PBox boxTitle="Main Problem" :text="purpose"
          ><IconBase width="65" height="65" iconColor="#b02851"
            ><Exercises /></IconBase
        ></PBox>
        <PBox boxTitle="Solution" :text="solution"
          ><IconBase width="65" height="65" iconColor="#b02851"
            ><Idea /></IconBase
        ></PBox>
      </div>
      <h2 class="works-title">Other solved tasks</h2>
      <WorksList :works="works" />
    </div>
  </section>
</template>

<script>
import PBox from "@/components/case/PurposeBox";
import IconBase from "@/components/icons/IconBase";
import Exercises from "@/components/icons/Exercises";
import Idea from "@/components/icons/Idea";
import WorksList from "@/components/case/WorksList";

export default {
  name: "PurposeSection",
  props: {
    purpose: String,
    solution: String,
    works: Array,
  },
  components: {
    PBox,
    IconBase,
    Exercises,
    Idea,
    WorksList,
  },
};
</script>

<style lang="scss">
.purpose {
  margin-top: 120px;
  .works-title {
    font-family: "PTSans", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 40px;
    margin-top: 120px;
    text-align: center;
  }
}
.boxes {
  display: flex;
  justify-content: space-between;
}
</style>
