<template>
  <main class="main home">
    <HeaderSection />
    <CasesSection />
    <SkillsSection />
  </main>
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection";
import CasesSection from "@/components/home/CasesSection";
import SkillsSection from "@/components/home/SkillsSection";
export default {
  name: "Home",
  components: {
    HeaderSection,
    CasesSection,
    SkillsSection,
  },
};
</script>
