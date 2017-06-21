<template>
  <div class="count">
    <span style="width:50px;">Data: {{ dataCount }}</span>
    <span style="width:50px;">Prop: {{ propCount }}</span>
    <span style="width:50px;">State: {{ $store.state.count }}</span>
    <button @click='increment()'>Update</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'count',
  data() {
    return {
      dataCount: 1,
    }
  },
  props: ['propCount'],
  methods: {
    ...mapActions({
      incrementState: 'increment',
    }),
    increment() {
      this.dataCount += 1;
      this.$emit('increment', this.propCount + 1);
      this.incrementState();
      this.$store.dispatch('incrementAsync');
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
