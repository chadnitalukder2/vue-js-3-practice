<template>
  <Home/> 
  <Event/>
  <Binding/>
</template>

<script>
import Home from './components/AppHome.vue';
import Event from './components/A_Event.vue';
import Binding from './components/A_binding.vue';


export default {
    name: 'App',
    components: {
        Home,
        Event,
        Binding,
    }
}
</script>

<style>

</style>
