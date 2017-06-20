<template>
  <div id="app">
    <div>
      Counter
      <counter></counter>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    'counter': Counter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
