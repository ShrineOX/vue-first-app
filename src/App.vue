<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: #f4f4f4;
}
</style>
