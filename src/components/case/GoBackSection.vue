<template>
  <section class="go-back">
    <div class="container">
      <ActionButton @tap="goToHome">{{ text }}</ActionButton>
    </div>
  </section>
</template>

<script>
import ActionButton from "@/components/UI/ActionButton";
export default {
  name: "GoBackSection",
  components: { ActionButton },
  data() {
    return {
      text: "<< Back to projects",
    };
  },
  methods: {
    goToHome() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
.go-back {
  padding: 45px 0;
}
</style>
