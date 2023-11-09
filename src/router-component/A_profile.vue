<template>
  <h1>{{ profile }}'s Profile Page</h1>
</template>

<script>
export default {
  name: "A_profile",
  data() {
    return {
      profile: "",
    };
  },
  beforeRouteUpdate(to, from, next) {
    // Fetch or update data based on the new route's params
    this.profile = to.params.name;
    console.log(to,from, "hello");
    next();
    
  },
  mounted() {
    // const route = userRoute();
    console.log("route", this.$route.params.name);
    this.profile = this.$route.params.name;
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: orange;
}
</style>
