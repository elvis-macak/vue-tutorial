<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='increase()'>Increase</button>
  </div>
</template>

<script>
// Object literals
// { func(){ } } ---> { func: function(){ } }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Enhanced_Object_literals

export default {
  name: 'count',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increase() {
      this.count += 1;
    },
    badFunc: () => { // arrow function won't work
      this.count += 1;
    },
  },
  mounted() {

  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
