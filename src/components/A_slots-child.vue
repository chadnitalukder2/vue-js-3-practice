<!-- <template>
   
   <h1>{{ name }}</h1>
   <slot>Defauld Data</slot>
</template> -->

<!-- <script>
    export default {
        name: "A_slots-child",
        props:[
            'name'
        ]
    }
</script> -->

<!-- <style lang="scss" scoped>

</style> -->


<!-- ============================================================ -->
<template>
  <div class="cart">
   <header> <slot name="header" >Header Default Data</slot></header>
  <content> <slot name="main" >Main Default Data</slot></content>  
   <footer> <slot name="footer" >Footer Default Data</slot></footer>
  
  </div>
</template>

<script>
    export default {
        name:"A_solts-child",
    }
</script>

<style lang="scss" scoped>
.cart{
    border: 1px solid;
    width: 132px;
    padding: 20px;
    margin: 20px;
    text-align: center;
}
</style>


