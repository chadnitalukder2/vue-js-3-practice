<template>
    <h1>Email : {{ email }}</h1>
   <h1>Name : {{ getName("puja das") }} </h1>
   <h1>Data : {{ getData().email }} </h1>
</template>
<script>
export default {
  name: "AppHome",
 data(){
    return{
        email: "puja@124test.com",
      
    }
 },
 methods: {
    getName(name){
            return (name);
        },
        getData(){
            return{
                name: "chadni talukder",
                email: this.email
            }
        }
 }
}
</script>

<style scoped>
h1{
    color: orange;
}
</style>

