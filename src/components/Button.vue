<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  props: {
    routeName: String
  }
};
</script>

<style lang="scss" scoped>
button {
  $color-text: #fff;
  $color-bg: $color-primary;

  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: inherit;
  transition: transform 0.2s;
  text-align: center;

  // disable style
  color: $color-primary-light;
  background-color: $color-text;
  border: 1px solid $color-primary-light;
  position: relative;

  &.active {
    color: $color-text;
    background-color: $color-bg;
    border: 1px solid $color-primary-light;
  }
}
</style>
