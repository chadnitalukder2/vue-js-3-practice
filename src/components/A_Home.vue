<!-- <template lang="scss">
<div>
    <h1>Reuse Component Like Props</h1>
    <ul>
        <li v-for="(item, index) in users" :key="index">
            <User :data="item" :getData="getData" />
        </li>
    </ul>
    <User />
</div>
</template> -->

<!-- 

<script>
import User from "./A_user.vue";
export default {
    name: "A_Home",
    components: {
        User,
    },
    methods: {
        getData(name) {
            alert(name)
        }
    },
    data() {
        return {
            users: [{
                    name: "Nitesh",
                    email: "nitesh@gmail.com"
                },
                {
                    name: "Puja",
                    email: "puja@gmail.com"
                },
                {
                    name: "Asha",
                    email: "Asha@gmail.com"
                },
                {
                    name: "chad",
                    email: "chad@gmail.com"
                },
            ],
        };
    },
};
</script> -->

<!-- 

<style lang="scss" scoped></style> -->

<!-- ============================================================= -->

<!-- <template>
  <h1>Props in vue Js 3</h1>
  <Student :name="name" />
  <Teacher name="Nitesh" />
</template> -->

<!-- <script>
import Student from "./A_student-props.vue";
import Teacher from "./A_Teacher-props.vue";
export default {
  name: "A_Home",
  components: {
    Student,
    Teacher,
  },
  data() {
    return {
      name: "Bruce",
    }
  },
};
</script> -->

<!-- ===================================================================== -->

<template>
  <div>
    <h1>Non-Props Data</h1>
    <nonProps item="some Data" name="user-cmp" />
  </div>
</template> 

<script>
import nonProps from "./A_non-props.vue";
export default {
  name: "A_Home",

  components: {
    nonProps,
  },
};
</script>

<style lang="scss" scoped>
h1{

    color:orange;
}
</style>
