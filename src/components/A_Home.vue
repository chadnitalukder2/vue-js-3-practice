<template>
<div>
    <h1>Reuse Component</h1>
    <ul>
        <li v-for="(item, index) in users" :key="index">
            <User :data="item" :getData="getData" />
        </li>
    </ul>
    <User />
</div>
</template>

<script>
import User from "./A_user.vue";
export default {
    name: "A_Home",
    components: {
        User,
    },
    methods: {
        getData(name) {
            alert( name)
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
</script>

<style lang="scss" scoped></style>
