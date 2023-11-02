<template>
    <h1>Email : {{ email }}</h1>
    <h1> Mobile : {{ mobile = 999 }}</h1>
<h1> Mobile : {{ mobile}}</h1>
<h1>Name : {{ getName("Chadni talukder") }} </h1>
</template>
<script>
export default {
  name: "AppHome",
 data(){
    return{
        email: "puja@124test.com",
        mobile: "01753507283",
        getName(x){
            return (x)
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

