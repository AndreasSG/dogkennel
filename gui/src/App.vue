<template>
  <div>
<<<<<<< HEAD
    <front-page />
    <adoption-page />
=======
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    lol
>>>>>>> 65f33b0de70b4720b28bce3ac171467ec9fbe281
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
