<!--
 * @Description:
 * @Author: liuyuan
 * @Date: 2021-08-03 10:35:39
-->
<template>
    <div id="app">
        <button @click="getData">测试</button>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    methods: {
        getData() {
            console.log(444);
        }
    },
    created() {
        console.log(333);
    },
};
</script>

<style lang="scss">
</style>