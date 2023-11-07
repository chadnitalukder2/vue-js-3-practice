<!-- <template>
  <h1>Dynaminc-component</h1>
  <button @click="tab='Java'">Load Java</button>
  <button @click="tab='Php'">Load Php</button>
  <button @click="tab='Noode'">Load Noode</button>
 
<component :is="tab"/>

</template> -->

<!-- <script>
import Java from './A_java.vue';
import Php from './A_php.vue';
import Noode from './A_Noode.vue';
    export default {
        name: "A_dy-home",
        components:{
         Java,
          Php,
          Noode
        },
        data(){
          return{
            tab:"Java"
          }
        }
    }
</script> -->

<!-- <style lang="scss" scoped>
h1{
  color: orange;
}
</style> -->


<!-- ================================================================================ -->


<template>
 <h1>Teleport Components</h1>
 <TeliportFooter >
  <h1>Yes</h1>
 </TeliportFooter>
 <teleport to="#footer">
  
 </teleport>
</template>

<script>
import TeliportFooter from './A_Teliport-footer.vue';
  export default {
    name:"A_dyHome",
  components:{
    TeliportFooter
  }
  }
</script>

<style lang="scss" scoped>
h1{
  color: orange;
}
</style>

