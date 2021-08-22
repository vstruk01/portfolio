<template>
  <ul class="icons-list">
    <li class="icons-item">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/valentyn-polishchyk-8a2435217/"
      >
        <IconBase><Lin /></IconBase>
      </a>
    </li>
    <li class="icons-item">
      <a href="mailto:validol4iknew@gmail.com">
        <IconBase><Email /></IconBase>
      </a>
    </li>
    <!-- <li class="icons-item">
      <a target="_blank" href="https://twitter.com/Validol79633989/">
        <IconBase><Twitter /></IconBase>
      </a>
    </li> -->
    <li class="icons-item">
      <a target="_blank" href="https://t.me/valiidol4ik">
        <IconBase><Telega /></IconBase>
      </a>
    </li>
    <li class="icons-item">
      <a target="_blank" href="https://www.instagram.com/validol4ik12/">
        <IconBase width="29" height="29"><Insta /></IconBase>
      </a>
    </li>
  </ul>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import Telega from "@/components/icons/Telega";
import Insta from "@/components/icons/Insta";
//import Twitter from "@/components/icons/Twitter";
import Lin from "@/components/icons/Lin";
import Email from "@/components/icons/Email";

export default {
  name: "IconsList",
  components: {
    IconBase,
    Telega,
    Insta,
    //Twitter,
    Lin,
    Email,
  },
};
</script>

<style lang="scss">
@media (min-width: 1199px) {
  .icons-item {
    &:hover {
      background: #b02851;
      path {
        fill: #fff;
      }
    }
  }
}
.icons-list {
  display: flex;
  align-items: center;
}
.icons-item {
  margin-left: 13px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #b02851;
  border-radius: 17px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 42px;
  }
  svg {
    transition: 0.2s ease-in-out;
  }
}
@media (max-width: 767px) {
  .icons-list {
    margin-top: 30px;
  }
}
</style>
