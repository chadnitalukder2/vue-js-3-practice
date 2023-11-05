<template>
    
 <div>
    <h1>Get checkbox & radio button value</h1>
    <h3>Technology</h3>
 
    <input type="checkbox" v-model="technology" value="java" id="java">
    <label for="java">Java</label>
    <input type="checkbox" v-model="technology" value="Node" id="Node">
    <label for="Node">Node</label>
    <input type="checkbox" v-model="technology" value="PHP" id="PHP">
    <label for="PHP">PHP</label>
    <br><br>
    <h1>Profession</h1>
    <input type="radio" v-model="Profession"  value="student" id="student" name="Profession">
    <label for="student">Student</label>
    <input type="radio" v-model="Profession"  value="developer" id="developer" name="Profession">
    <label for="developer">developer</label>

    <h4>Technology : {{ technology }}</h4>
   <h4>I am a : {{ Profession }}</h4>
</div> 

</template>

  
<script>
export default {
    data() {
        return {
            technology: [],
            Profession: null,
        }
    },
    methods: {
        getData() {

            console.log("values : ", this.email, this.password);
        }
    },

}
</script>

  
<style scoped>
h1 {
    color: orange;
}
</style>
