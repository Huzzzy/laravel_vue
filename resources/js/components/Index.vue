<template>
    <div>
        <div>
            <router-link to="/posts">Posts</router-link>
        </div>
        <div>
            <router-link to="/tags">Tags</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "Index",

};
</script>

<style scoped>

</style>
