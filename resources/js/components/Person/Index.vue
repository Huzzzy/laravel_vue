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
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="btn btn-primary"
                            :to="{ name: 'person.show', params: { id: person.id } }">Show</router-link>

                    </td>
                    <td>
                        <router-link class="btn btn-success"
                            :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

export default {
    name: "Index",

    data() {
        return {
            people: null
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then((result) => {
                    this.people = result.data;
                });
        }
    },
};
</script>

<style scoped>

</style>
