<template>
  <h2>Two Way Binding</h2>
  <input v-model="data" type="text" />
  <h2>{{ data }}</h2>
</template>
<script>
export default {
  name: "AppHome",
  data() {
    return {
      data: "",
    };
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
