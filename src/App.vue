<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Screen />
</template>

<script>
import Screen from "./components/page/screen.vue";

export default {
  name: "App",
  components: {
    Screen,
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
