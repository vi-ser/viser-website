<script>
import AppNav from './components/AppNav.vue';
import AppSlider from './components/AppSlider.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppNav,
    AppSlider,
    AppHeader,
  }
}
</script>

<template>
  <AppNav></AppNav>
  <AppHeader></AppHeader>
  <AppSlider></AppSlider>


</template>

<style lang="scss" scoped>
@use "./styles/variables" as *;
@use "./styles/mixins" as *;

body {
  background-color: red;
}
</style>
