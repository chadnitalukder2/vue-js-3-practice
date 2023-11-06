<template>
   <h1>Ref in vue js 3</h1>
   <input type="text" ref="input">
   <button @click="getData">Click Me</button>
</template>

<script>
    export default {
        name: "A_Ref",
        methods:{
            getData(){
                // this.$refs.input.focus();
                // this.$refs.input.value = "code step by step";
                // this.$refs.input.style.color = "red"
                console.warn(this.$refs.input.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
h1{
    background:orange ;
}
</style>