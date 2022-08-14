<template>
  <div>
    <front-page />
    <adoption-page />
  </div>
</template>

<script>
import AdoptionPage from "./views/AdoptionPage.vue";
import FrontPage from "./views/FrontPage.vue";

export default {
  name: "App",
  components: {
    FrontPage,
    AdoptionPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
