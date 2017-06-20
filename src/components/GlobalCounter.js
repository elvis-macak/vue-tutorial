import Vue from 'vue'

var GlobalComponent = Vue.extend({
  template: `
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='increase()'>Increase</button>
  </div>`,
  name: 'global-counter',
  data: function () {
    return {
      count: 1
    }
  },
  methods: {
    increase: function () {
      debugger;
      this.count += 1;
    }
  },
  mounted: function () {

  },
})
export default Vue.component('global-counter', GlobalComponent)

// NOTE
// 1. Vue.extend create a subclass of Vue
// 2. Vue.component register a global component
//