<template>
<h1>Simple Form</h1>
<ul>
    <li v-for="item in error" :key="item">
        {{ item }} is not valid
    </li>
</ul>
<form>
 
    <label>Email : </label>
    <input v-model="form.email" type="text" placeholder="Enter email"><br><br>

    <label>Password : </label>
    <input v-model="form.password " type="password" placeholder="Enter password"><br><br>

    <select v-model="form.country">
        <option>Bangladesh</option>
        <option>India</option>
        <option>Usa</option>
    </select><br><br>

    <h3>Gender : </h3>
    <input v-model="form.gender " value="male" type="radio" name="gender">
    <label>Male</label>
    <input v-model="form.gender " value="female" type="radio" name="gender">
    <label>Female</label><br><br>

    <h3>Technology : </h3>
    <input v-model="form.technology " value="java" type="checkbox" name="technology">
    <label>Java</label>
    <input v-model="form.technology " value=".net" type="checkbox" name="technology">
    <label>.Net</label><br><br>

    <button type="button" @click="getItem">Login</button>
</form>

</template>

<script>
export default {
    name: "A_From",
    data() {
        return {
            form: {
                email: "",
                password: "",
                country: "",
                gender: "",
                technology: []
            },
            Error:[]
        }
    },
    methods: {
        getItem() {
            this.error = [];
            for(const item in this.form){
                if(this.form[item] === '' || this.form[item].length === 0){
                    this.error.push(item)
                }
            }
            if(this.error.length === 0){
                    alert("data has been submited ")
                }
                console.warn(this.error);

        }
    }

}
</script>

<style lang="scss" scoped>
h1 {
    background: orange;
}
</style>
