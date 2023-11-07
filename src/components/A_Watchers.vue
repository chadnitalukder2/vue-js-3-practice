<template>
   <h1>Watchers</h1>
   <h2>{{ count }}</h2>
   <button @click="count = count+1">+</button>
   <button @click="count = count-1">-</button>
</template>

<script>
    export default {
        name: "A_watchers",
        data(){
            return{
                count: 0
            }
        },
        watch:{
            count(val,prev){
                if(val>10 && val>prev){
                  this.count =0
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
h1{color: orange;}
</style>