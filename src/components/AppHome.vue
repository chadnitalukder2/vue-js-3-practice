<template>
<h1>Email: {{ email }}</h1>
<h1>Mobile: {{ mobile }}</h1>
<h1>Name : {{ getName("puja") }}</h1>
</template>

<script>
export default {
    name: "AppHome",
    data() {
        return {
            email: "puja@gmail.com",
            mobile : "01753507233",  
            getName(name){
                return name
            }
        }
    },

};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
