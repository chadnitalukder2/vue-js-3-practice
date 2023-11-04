<template>
    <div>
      <h1>Get input field value</h1>
      <label>Email: </label>
      <input type="text" v-model="email" placeholder="enter email"><br><br>
  
      <label>Password: </label>
      <input type="password" v-model="password" placeholder="enter password"><br><br>
  
      <button type="button" @click.prevent="getData">Get Data</button>
  
      <h1>Email: {{ email }}</h1>
      <h1>Password: {{ password }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      getData() {
        // You can access the values entered in the input fields using this.email and this.password
        // Update the displayed values
      console.log("values : " , this.email , this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: orange;
  }
  </style>
  