<template>
  <main class="main home">
    <HeaderSection />
    <CasesSection />
  </main>
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection";
import CasesSection from "@/components/home/CasesSection";
export default {
  name: "Home",
  components: {
    HeaderSection,
    CasesSection,
  },
};
</script>
