<template>
<div>
    <h1 v-if="show">conditions in Vue js</h1>
    <h1 v-else>Else conditions in Vue js</h1>
    <button @click="show =! show">Click me</button>
</div>
<br><br> <br>
<div>
    <h1>for loop in vue js</h1>
    <ul>
        <li v-for="item,index in tecnology" :key="index">{{ item }}</li>
    </ul>
    <br><br>
    <ul>
        <li v-for="item,index in users " :key="index">
            User name is :{{ item.name }} and Email is : {{ item.email }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "A_condition",
    data(){
     return{
         show: true
     }
    },
    setup() {
        return {
            tecnology: [
                "Java",
                "php",
                "node",
                "asp"
            ],
            users: [
                {
                    name: 'Nitesh',
                    email: 'nitesh@gmail.com',
                },
                {
                    name: 'puja',
                    email: 'puja@gmail.com',
                },
                {
                    name: 'Asha',
                    email: 'asha@gmail.com',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
