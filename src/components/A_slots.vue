<!-- <template>

<soltsChild>
    <h1>Code Step By Step</h1>
    <h2>Chadni Talukder</h2>
</soltsChild>
<soltsChild><img src="https://st2.depositphotos.com/3745557/7435/i/450/depositphotos_74355965-stock-photo-beautiful-oak-at-the-sunset.jpg"></soltsChild>

<soltsChild></soltsChild>
<soltsChild><h1>Petter</h1></soltsChild>
</template> -->

<!-- <script>
import soltsChild from './A_slots-child.vue';
    export default {
        name:"A_solts",
        components:{
            soltsChild,
        }
    }
</script> -->

<!-- <style lang="scss" scoped>
h1{color: orange;}
</style> -->

<!--======================================================================  -->

<template>
  
   <slotsChild>
    <template v-slot:header>
        <h1>Peter</h1>
    </template>

    <template v-slot:main>
        <p>Code Step By Step</p>
    </template>

    <template v-slot:footer>
        <button>Buy Now</button>
    </template>
   
   </slotsChild>

   <slotsChild>
    <template v-slot:header>
        <h1>Puja</h1>
    </template>

    <template v-slot:main>
        <p>Code Step By Step</p>
    </template>

    <template v-slot:footer>
        <button>Buy Now</button>
    </template>
   
   </slotsChild>

   <slotsChild>
    <template v-slot:header>
        <h1>Nitesh</h1>
    </template>

    <template v-slot:main>
        <p>Code Step By Step</p>
    </template>

    <template v-slot:footer>
        <button>Buy Now</button>
    </template>
   
   </slotsChild>


</template>

<script>
import slotsChild from './A_slots-child.vue';
    export default {
        name:"A_slots",
        components:{
            slotsChild,
        }
    }
</script>

<style lang="scss" scoped>
h1{
    color:orange
}
h2{
color: blue;
}

</style>




