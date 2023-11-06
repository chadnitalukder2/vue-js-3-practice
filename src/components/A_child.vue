<!-- <template>
   <h2>Child Component</h2>
   <h2>Name: {{ name }}</h2>
   <h2>Name: {{ Data.name }}</h2>
   <h2>Email: {{ Data.email }}</h2>
   <button @click="getData()">Call me</button>
</template> -->

<!-- <script>

    export default {
        name: "A_child",
        props:{
            name: String,
            Data: Object,
            getData: Function
        }
    }
</script> -->

<!-- <style lang="scss" scoped>
</style> -->

<!-- ==================================================================== -->

<template>
    <h1>Child Component</h1>
    <button @click="getUser(userName)">Send User Name to Parent</button>
</template>

<script>
    export default {
        name: "A_child",
        props:[
           'getUser'
        ],
        data(){
            return{
                userName: "Peter"
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>

