<template>
  <section class="full header-section">
    <SiteHeader />
    <AboutMe />
  </section>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import AboutMe from "@/components/home/AboutMe";

export default {
  name: "HeaderSection",
  components: {
    SiteHeader,
    AboutMe,
  },
};
</script>

<style lang="scss"></style>
