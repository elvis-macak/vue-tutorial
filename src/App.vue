<template>
  <div id="app">
    <div>
      Counter
      <counter v-if="counterStatus"></counter>
      <!--<counter v-show="counterStatus"></counter>-->
      <br>
      <button @click="toggleCounter()">Toggle Counter</button>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    'counter': Counter,
  },
  data() {
    return { counterStatus: false }
  },
  methods: {
    toggleCounter() {
      this.counterStatus = !this.counterStatus;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
