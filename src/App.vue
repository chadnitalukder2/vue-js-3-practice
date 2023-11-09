<template>
 <div>Home</div>
 <router-link to="/"> Home Page </router-link><br><br>
 <router-link to="/login"> Login Page </router-link><br><br>
 <router-link to="/profile/nitesh">Nitesh's Profile Page </router-link><br><br>
 <router-link to="/profile/puja">Puja's Profile Page </router-link><br><br>
 <router-link to="/profile/petter">Piter's Profile Page </router-link><br><br>

 <router-link :to="{ name: 'login'}">
  User
</router-link>

 <router-view/>
  <!--  
   
    <dynamicHome/> 
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

//import dynamicHome from './Dynaminc-component/A_dyHome.vue';
//import Slots from './components/A_slots.vue';
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
    
  //  dynamicHome,
   // Slots,
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
