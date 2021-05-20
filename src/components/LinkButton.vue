<template>
  <router-link :to="{ name: routeName }" exact><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    routeName: String
  }
};
</script>

<style lang="scss" scoped>
a {
  $color-text: #fff;
  $color-bg: $color-primary;

  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  font-family: inherit;
  transition: transform 0.2s;

  // disable style
  color: $color-primary-light;
  background-color: $color-text;
  border: 1px solid $color-primary-light;
  position: relative;

  &.router-link-active {
    color: $color-text;
    background-color: $color-bg;
    border: 1px solid $color-primary-light;
  }
}
</style>
