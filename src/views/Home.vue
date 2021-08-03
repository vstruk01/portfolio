<template>
  <main class="main home">
    <HeaderSection />
    <CasesSection />
    <SiteFooter />
  </main>
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection";
import SiteFooter from "@/components/SiteFooter";
import CasesSection from "@/components/home/CasesSection";
export default {
  name: "Home",
  components: {
    HeaderSection,
    SiteFooter,
    CasesSection,
  },
};
</script>
