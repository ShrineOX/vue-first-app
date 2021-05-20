<template>
  <div class="manager">
    <Record v-for="record in data" :key="record.id" :record="record" />
    <Button class="expand">Expand All Sections</Button>
    <Button class="active">
      <font-icon icon="plus-circle" />
      Add a Section</Button
    >
  </div>
</template>

<script>
import axios from 'axios';
import Record from '../components/Record';
import Button from '../components/Button';

export default {
  components: {
    Record,
    Button
  },
  data() {
    return {
      data: null
    };
  },
  mounted() {
    axios
      .get('https://mocki.io/v1/af96501c-cf82-4c55-bc0f-39253de660f4')
      .then(({ data }) => (this.data = data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped lang="scss">
.manager {
  padding: 10px 25px;
  text-align: left;

  .expand {
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
}
</style>
