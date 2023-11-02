<template>
 <h1 @mousemove="getConsole()">Home Component</h1>
 <button @click="getData('button 1 click')">click me</button>
 <button v-on:dblclick="getData('button 2 click')">click me</button><br>
 
<h2>{{ count }}</h2>
<button @click="countIAdd">+1</button>
<button @click="countIRe">-1</button>
</template>
<script>
export default {
  name: "AppHome",
   data(){
    return{
        count: 0
    }
   },
  methods: {
    getData(data) {
     alert (data)
    },
    getConsole(){
        console.log("event is fired");
    },
    countIAdd(){
       this.count = this.count +1
    },
    countIRe(){
        this.count = this.count -1
    }
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
