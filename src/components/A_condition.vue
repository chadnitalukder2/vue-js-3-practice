<template>
    <div>
        <h1 v-if="show">conditions in Vue js</h1>
        <h1 v-else>Else conditions in Vue js</h1>
        <button @click="show =! show">Click me</button>
    </div>
</template>

<script>
    export default {
        name: "A_condition",
   data(){
    return{
        show: true
    }
   }
   }
</script>

<style lang="scss" scoped>

</style>