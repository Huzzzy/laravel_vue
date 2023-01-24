<template>
    <div>
        <div>
            <router-link :to="{ name: 'person.index' }">People</router-link>
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
