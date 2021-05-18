<template>
  <div class="header">
    <div class="info">
      <div class="info__title-bar">
        <div class="info__go-back">Edit YearBook Builder</div>
        <div class="info__title">SMS YearBook 2021</div>
        <div class="info__help">Help</div>
      </div>
      <div class="info__catagory grid-3-cells">
        <Button routeName="PrintedEdition" @click="handleClick"
          >PRINTED EDITION</Button
        >
        <Button routeName="Manager">MANAGER</Button>
        <Button routeName="DigitalEdition">DIGITAL EDITION</Button>
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
import Button from './Button';

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
    Button
  },
  methods: {
    handleClick() {
      // console.log('hi');
      // console.log(this.buttons);
    },
    deActiveQuantity() {
      this.quantity.forEach(q => (q.isDisable = true));
    }
  },
  watch: {
    $route(to) {
      this.deActiveQuantity();
      this.quantity.find(q => q.route === to.path).isDisable = false;
    }
  }
};
</script>

<style scoped lang="scss">
.info {
  max-width: 1140px;
  margin-inline: auto;
  font-size: 1.2rem;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 5px;
  // draw border bottom
  & > div {
    border-bottom: 1px solid rgb(182, 182, 182);
  }

  &__title-bar {
    display: flex;
    justify-content: space-between;
    background-color: $color-primary-light;
    height: 40px;

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
    padding-inline: 5px;
    font-size: 0.9rem;
  }
  &__go-back {
    width: 100px;
  }

  &__quantity {
    &-value {
      color: $color-primary;
      font-size: 0.9rem;
      margin-inline: 1rem;
    }
    span.disabled {
      color: $color-primary-light;
    }
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
