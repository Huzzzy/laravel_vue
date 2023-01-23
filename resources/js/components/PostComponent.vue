<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
        <!-- <table class="table">
            <thead>
                <tr>
                    <th class="col">#</th>
                    <th class="col">Name</th>
                    <th class="col">Age</th>
                    <th class="col">job</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </tbody>
        </table> -->

    </div>
</template>

<script>
import CreateComponent from './CreateComponent.vue';
import IndexComponent from './IndexComponent.vue';

export default {
    name: "PostComponent",


    data() {
        return {

        }
    },

    mounted() {
    },

    methods: {
    },


    components: {
        CreateComponent,
        IndexComponent,
    }
};
</script>

<style scoped>

</style>
