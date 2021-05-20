<template>
  <div class="header">
    <div class="info">
      <div class="info__title-bar">
        <div class="info__go-back">
          <font-icon icon="long-arrow-alt-left" />
          Exit YearBook Builder
        </div>
        <div class="info__title">SMS YearBook 2021</div>
        <div class="info__help">
          <font-icon icon="question-circle" />
          Help
        </div>
      </div>
      <div class="info__catagory grid-3-cells">
        <link-button routeName="printedEdition">PRINTED EDITION</link-button>
        <link-button routeName="manager">MANAGER</link-button>
        <link-button routeName="digitalEdition">DIGITAL EDITION</link-button>
      </div>
      <div class="info__quantity grid-3-cells">
        <span
          class="info__quantity-value"
          v-for="q in quantity"
          :class="{ disabled: q.isDisable }"
          :key="q.key"
          >{{ q.content }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from './LinkButton';

export default {
  name: 'Header',
  data() {
    return {
      quantity: [
        {
          key: 1,
          isDisable: true,
          content: '48 Pages',
          route: '/printed-edition'
        },
        { key: 2, isDisable: true, content: '26 Sheets', route: '/manager' },
        {
          key: 3,
          isDisable: true,
          content: '26 Screens',
          route: '/digital-edition'
        }
      ]
    };
  },
  components: {
    LinkButton
  },
  watch: {
    $route(to) {
      this.quantity.forEach(
        q => (q.isDisable = q.route === to.path ? false : true)
      );
    }
  }
};
</script>

<style scoped lang="scss">
.info {
  margin-inline: auto;
  font-size: 1.2rem;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  // row-gap: 5px;
  // draw border bottom
  & > div {
    border-bottom: 1px solid rgb(182, 182, 182);
  }

  &__title-bar {
    display: flex;
    justify-content: space-between;
    background-color: $color-primary-light;
    // height: 40px;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__title {
    color: $color-primary;
  }
  &__help,
  &__go-back {
    color: #fff;
    background-color: $color-primary;
    padding: 5px;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  &__go-back {
    max-width: 90px;
  }
  &__help > svg {
    margin-bottom: 5px;
    padding-inline: 15px;
  }

  &__catagory {
    background-color: #fff;
  }

  &__quantity {
    &-value {
      color: $color-primary;
      font-size: 0.9rem;
      margin-inline: 1rem;
      position: relative;
    }
    span.disabled {
      color: $color-primary-light;
    }
  }
  // add vertical bars
  &__catagory a:not(:last-child)::after,
  &__quantity-value:not(:last-of-type)::after {
    content: '';
    height: 15px;
    width: 2px;
    background-color: rgb(194, 191, 191);
    position: absolute;
    top: 0;
    right: -34px;
  }
  &__catagory a:not(:last-child)::after {
    right: -19px;
    width: 1px;
    height: 25px;
  }
}

.grid-3-cells {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  justify-content: center;
  align-items: center;
  column-gap: 35px;
}
</style>
