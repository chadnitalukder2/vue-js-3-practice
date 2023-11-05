<template>
   <h2>User Component</h2>
  {{ item }}
   <h2>{{ item.name }}</h2>
  <h2>{{ item.email }}</h2> 
</template>

<script>
    export default {
        name:"A_user",
        props:[
            'data'
        ],
        data(){
            return{
                item:{}
            }
        },
        mounted(){
            this.item = JSON.parse(this.data)
        }
      
        
           
        
    }
</script>

<style lang="scss" scoped>

</style>