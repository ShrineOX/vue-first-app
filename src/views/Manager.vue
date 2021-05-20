<template>
  <div class="manager">
    <Record v-for="record in allData" :key="record.id" :record="record" />
    <Button class="expand">Expand All Sections</Button>
    <Button class="active">
      <font-icon icon="plus-circle" />
      Add a Section</Button
    >
  </div>
</template>

<script>
import Record from '../components/Record';
import Button from '../components/Button';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Record,
    Button
  },
  methods: mapActions(['fetchData']),
  computed: mapGetters(['allData']),
  mounted() {
    this.fetchData();
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
