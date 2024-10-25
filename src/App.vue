<script>
import AppNav from './components/AppNav.vue';

export default {
  components: {
    AppNav,
  }
}
</script>

<template>
  <AppNav></AppNav>
  <h1 class="text-uppercase">Hello World</h1>

</template>

<style lang="scss" scoped>
@use "./styles/variables" as *;
@use "./styles/mixins" as *;

h1 {
  font-family: 'Kurdis Extracondensed Black', sans-serif;
  color: $primaryColor;
  font-size: 6rem;
}
</style>
