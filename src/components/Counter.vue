<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='increase()'>Increase</button>
  </div>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    increase() {
      this.count += 1;
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
