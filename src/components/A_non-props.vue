<template>
    <div>
        <h3>Bruce</h3>
        <h3>Peter</h3>
        <h3>tony</h3>
        <h3>{{ item }} {{ name }}</h3>
        <h3 v-bind="$attrs">Tony</h3>
    </div>
</template>

<script>
    export default {
        name: 'A_non-props',
        inheritAttrs: false,
        props:{
            item: String,
            name : String
        }
    }
</script>

<style lang="scss" scoped>

</style>