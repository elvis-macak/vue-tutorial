import Vue from 'vue'

export default {
  template: `
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='increase()'>Increase</button>
  </div>`,
  name: 'local-counter',
  data: function () {
    return {
      count: 1
    }
  },
  methods: {
    increase: function () {
      this.count += 1;
    }
  },
  mounted: function () {

  },
}

// NOTE
// 1. export a detault object is like create a Vue instance
// 2. methods/computed are object
//    data/mounted are functions
//