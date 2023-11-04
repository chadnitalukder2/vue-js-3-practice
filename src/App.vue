<template>
  <Home/> 
  <Event/>
</template>

<script>
import Home from './components/AppHome.vue';
import Event from './components/A_Event.vue';


export default {
    name: 'App',
    components: {
        Home,
        Event,
    }
}
</script>

<style>

</style>
