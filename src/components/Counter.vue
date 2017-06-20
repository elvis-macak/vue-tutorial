<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='increase()'>Increase</button>
    <br>
    <button @click='badFunc()'>badFunc</button>
    <br>
    <button @click='printThis()'>print "this" in console</button>
  </div>
</template>

<script>
// Object literals
// { func(){ } } ---> { func: function(){ } }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Enhanced_Object_literals
import Vue from 'vue';

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
      debugger;
      this.count += 1;
    },
    printThis() {
      debugger;
      console.log(this);
      // VueComponent
      //   --> count, countAlias, increase, badFunc, printThis

      console.log(Vue.lodash);
      console.log(Vue.prototype);
      // prototype_chain
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#With_a_constructor
      // http://thinkingincrowd.u.qiniudn.com/JS_prototype_chain.png
      console.log(Vue.prototype === this.__proto__.__proto__);
    },
  },
  computed: {
    countAlias() {
      return this.count;
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
