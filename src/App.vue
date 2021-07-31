<template>
  <Home />
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import "~normalize.css";

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
</style>
