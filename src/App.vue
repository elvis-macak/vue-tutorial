<template>
  <div id="app">
    <div>
      Suggest Counter
      <counter></counter>
    </div>
    <div>
      Local Counter
      <local-counter></local-counter>
    </div>
    <div>
      Global Counter
      <global-counter></global-counter>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import LocalCounter from './components/LocalCounter.js'
import './components/GlobalCounter.js'

export default {
  name: 'app',
  components: {
    'counter': Counter,
    'local-counter': LocalCounter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
