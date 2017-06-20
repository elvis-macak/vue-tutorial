<template>
  <div class="count">
    <h1>{{ obj.count1 }} & {{ obj.count2 }}</h1>
    <button @click='increase1()'>Increase 1</button>
    <button @click='increase2()'>Increase 2</button>

    <br>
    <button @click='testDefineProperty()'>testDefineProperty</button>
  </div>
</template>

<script>
import Vue from 'vue';

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}
var globalVars = new Archiver();

export default {
  name: 'count',
  data() {
    return {
      count: 1,
      obj: {
        count1: 1,
      },
    }
  },
  methods: {
    testDefineProperty() {
      console.log('-----before')
      console.log(globalVars.getArchive());
      globalVars.temperature = globalVars.getArchive().length;
      console.log('-----after')
      console.log(globalVars.getArchive());
      console.log('')
    },
    increase1() {
      this.obj.count1 += 1;
    },
    increase2() {
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      this.obj.count2 = (this.obj.count2 || 1) + 1;
      // this.obj = Object.assign({}, this.obj);
      // this.$forceUpdate(); 
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
