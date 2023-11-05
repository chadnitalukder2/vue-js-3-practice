<template>
  <div class="user">
    <h2>{{ data?.name }}</h2>
   <h2>{{ data?.email }}</h2> 
   <button @click=" getData(data?.name)">allert User Name</button>
  </div>
  
 
</template>

<script>
    export default {
        name:"A_user",
        props:[
            'data',
            'getData',
        ],
    
    }
</script>

<style lang="scss" scoped>
.user{
    background: skyblue;
    border-bottom: 1px solid;
    padding: 10px;
    margin-bottom: 15px;
}
</style>