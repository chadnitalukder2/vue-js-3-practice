<template>
 <div></div>
 <Slots/> 
  <!--  
    <Slots/> 
    <Watchers/>
    <Computed/>
    <From/> 
    <Ref/> 
    <Home/>
  <Parent/> 
  <Event/>
  <Binding/>
  <condition/> -->
</template>

<script>
import Slots from './components/A_slots.vue';
//import Watchers from './components/A_Watchers.vue';
//import Computed from './components/A_computed-property.vue';
//import From from './components/A_from.vue';
//import Ref from './components/A_Raf.vue';
//import Home from './components/A_Home.vue';
//import Parent from './components/A_parent.vue';
// import Event from './components/A_Event.vue';
//import Binding from './components/A_binding.vue';
// import condition from './components/A_condition.vue';

export default {
  name: "App",
  components: {
    Slots,
   // Watchers,
    //Computed,
   // From,
   // Ref,
   // Home,
   //Parent,
    // Event,
    // Binding,
    // condition,
  },
};
</script>

<style></style>
