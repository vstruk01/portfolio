<template>
  <SiteHeader />
  <router-view></router-view>
  <SiteFooter />
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default {
  name: "",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style lang="scss">
@import "~normalize.css";

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  src: url("./assets/fonts/Montserrat-Bold.woff2") format("woff2");
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  src: url("./assets/fonts/Montserrat-Medium.woff2") format("woff2");
  font-weight: 500;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  src: url("./assets/fonts/Montserrat-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "PTSans";
  font-style: normal;
  src: url("./assets/fonts/PTSans-Bold.woff2") format("woff2");
  font-weight: 700;
}

@font-face {
  font-family: "PTSans";
  font-style: normal;
  src: url("./assets/fonts/PTSans-Regular.woff2") format("woff2");
  font-weight: 400;
}

* {
  box-sizing: border-box;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  font-size: 16px;
  //font-family: "Montserrat", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #fff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.full {
  width: 100vw;
  height: 100vh;
}

.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container {
  padding: 0 15px;
  margin: 0 auto;
  width: 1170px;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (max-width: 1199px) {
  .container {
    width: 990px;
  }
}
@media (max-width: 991px) {
  .container {
    width: 750px;
  }
}
@media (max-width: 767px) {
  .container {
    width: 570px;
  }
}
@media (max-width: 575px) {
  .container {
    width: 100%;
  }
}
</style>
