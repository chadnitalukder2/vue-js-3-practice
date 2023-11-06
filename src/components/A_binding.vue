<!-- <template>
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
    <input type="radio" v-model="Profession" value="student" id="student" name="Profession">
    <label for="student">Student</label>
    <input type="radio" v-model="Profession" value="developer" id="developer" name="Profession">
    <label for="developer">developer</label>

    <h4>Technology : {{ technology }}</h4>
    <h4>I am a : {{ Profession }}</h4>
</div>

</template> -->

<!-- 
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
</script> -->

<!-- 
<style scoped>
h1 {
    color: orange;
}
</style> -->


<!-- ====================================================================== -->

<template>
    <h1>Html & CSS Binding</h1>
    <h3>{{ text }}</h3>
    <div v-html="tag"></div>
    <div v-html="tag + tag2"></div>
    <h1>===============================================================</h1>
    <!-- <h2 class="staticClass" :class="{ green:colorFull, err:true }">Class Binding</h2> -->
    <h2 class="staticClass" :class="adjustStyle">Class Binding</h2>
    <button @click="colorFull=!colorFull">Apply Style</button>
</template>

<script>
    export default {
        name:"A_binding",

        data(){
            return{
                text: "Puja talukder",
                tag: "<h2>Chadni talukder</h2>",
                tag2: "<h2>Good morning</h2>",

                colorFull: true
            }
        },

        computed:{
            adjustStyle(){
                return{
                    green: this.colorFull,
                    err: true,
                    other:true,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
h1{
    color: orange;
}
.green{
    background: green;
    width: 200px;
    padding: 10px;
    color: #fff;
}
.err{
    color:red ;
}
.other{
    font-size: 50px;
}
// .staticClass{
//     color: blue;
// }
</style>
