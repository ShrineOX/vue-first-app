<template>
  <div class="record">
    <span class="record__clr-tag" :style="{ color: record.color }"></span>
    <font-icon icon="caret-right" />
    <p class="record__title">{{ record.title }}</p>
    <div class="record__progress" :style="{ color: record.color }">
      <div class="record__progress-bar"></div>
    </div>
    <span class="record__date">{{ record.date }}</span>
    <div class="record__option">
      <font-icon icon="ellipsis-h" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['record']
};
</script>

<style scoped lang="scss">
.record {
  display: grid;
  grid-template-columns: auto auto 1fr repeat(3, auto);
  align-items: center;
  column-gap: 10px;
  background-color: #fff;
  line-height: 0;
  margin-block: 7px;
  font-size: 0.9rem;
  padding-inline: 2rem 0.5rem;

  &__clr-tag {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: currentColor;
  }

  &__title {
    margin-right: auto;
    font-weight: bold;
    cursor: pointer;
  }
  &__progress {
    width: 130px;
    height: 5px;
    border-radius: 5px;
    background-color: #ddd;
    position: relative;

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #fff;
    }

    &::before {
      left: 33.3%;
    }
    &::after {
      top: 0;
      left: 66.6%;
    }

    &-bar {
      height: 100%;
      border-radius: 5px;
      background-color: currentColor;
      width: 5%;
    }
  }
  &__date {
    font-size: 0.8rem;
  }
  &__option {
    color: #555;
    width: 15px;
    height: 15px;
    border: 1px solid #555;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    cursor: pointer;
  }
}
</style>
