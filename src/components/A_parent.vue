<!-- <template>
  <h1>Pass Data to child Component</h1>

  <Child :name="name" :Data="user" :getData="getData"/>
</template> -->

<!-- <script>
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
</script> -->

<!-- <style lang="scss" scoped>
</style> -->

<!-- ====================================================================== -->

<template>
 <h1>Send Data Child to parent in vue js</h1>
 <h2> User Name : {{ name }}</h2>
 <Child :getUser="getUserName" ref="puja"/>
 <button @click="buttonClick()">click</button>

</template>

<script>
import Child from './A_child.vue';
  export default {
    name:"A_parent",
    components:{
      Child,

    },
    data(){
      return{
        name: ''
      }
    },
    methods:{
      getUserName(name){
       this.name =name
      },
      buttonClick(){
      console.log(this.$refs.puja,"hello");
      }
    }
  }
</script>

<style lang="scss" scoped>
h1{background: orange;}
</style>
