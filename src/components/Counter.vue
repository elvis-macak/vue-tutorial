<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click='update()'>Update</button>
  </div>
</template>

<script>
export default {
  name: 'count',
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    update() {
      this.count += 1;
    },
  },
  created() {
    console.log(`created(): this.count = ${this.count}`);
  },
  beforeMount() {
    console.log(`beforeMount(): this.count = ${this.count}`);
  },
  mounted() {
    console.log(`mounted(): this.count = ${this.count}`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate(): this.count = ${this.count}`);
  },
  updated() {
    console.log(`updated(): this.count = ${this.count}`);
  },
  beforeDestroy() {
    console.log(`beforeDestroy(): this.count = ${this.count}`);
  },
  destroyed() {
    console.log(`destroyed(): this.count = ${this.count}`);
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
