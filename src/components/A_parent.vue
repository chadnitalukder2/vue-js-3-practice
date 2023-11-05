<template>
  <h1>Pass Data to child Component</h1>

  <Child :name="name" :Data="user" :getData="getData"/>
</template>

<script>
import Child from './A_child.vue'
    export default {
        name: "A_parent",
        components: {
          Child,
        },
        data(){
          return{
            name: "nitesh",
            user: {
              name: "Chadni",
              email:"chad@gmail.com"
            }
          }
        },
        methods:{
          getData(){
            alert("Function called")
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>