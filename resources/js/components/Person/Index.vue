<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people">
                    <td>
                        <router-link class="nav-link" :to="{ name: 'person.show', params: { id: person.id } }">{{
                            person.name
                        }}</router-link>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="btn btn-outline-success"
                            :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
                    </td>
                    <td>
                        <a @click.prevent="$store.dispatch('deletePerson', person.id)" class="btn btn-outline-danger"
                            href="#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

export default {
    name: "Index",



    mounted() {
        this.$store.dispatch('getPeople');
    },

    methods: {



    },

    computed: {
        people() {
            return this.$store.getters.people;
        }
    }
};
</script>

<style scoped>

</style>
