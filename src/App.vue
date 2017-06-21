<template>
  <div id="app">
    <div>
      <counter :propCount="count" @increment="count=$event"></counter>
      <counter :propCount="count" @increment="count=$event"></counter>
      <counter :propCount="count" @increment="count=$event"></counter>
      <br>
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
    return { 
      count: 0,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
