<template>
  <Home/> 
  <Event/>
  <Binding/>
  <condition/>
</template>

<script>
import Home from './components/AppHome.vue';
import Event from './components/A_Event.vue';
import Binding from './components/A_binding.vue';
import condition from './components/A_condition.vue';

export default {
    name: 'App',
    components: {
        Home,
        Event,
        Binding,
        condition,
    }
}
</script>

<style>

</style>
