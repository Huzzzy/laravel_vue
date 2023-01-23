<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="person in people">
                    <tr :class="isEdit(person.id) ? 'd-none' : ''">
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td>
                            <a href="#"
                                @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job,)"
                                class="btn btn-success">
                                Edit
                            </a>
                        </td>
                        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
                    </tr>
                    <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from './EditComponent.vue';

export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: '',
            age: null,
            job: ''
        }
    },

    mounted() {
        this.getPeople();
    },

    components: {
        EditComponent,
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then((result) => {
                    this.people = result.data;
                });
        },

        updatePerson(id) {
            this.editPersonId = null;
            axios.patch(`/api/people/${id}`, {
                name: this.name,
                age: this.age,
                job: this.job,
            })
                .then((result) => {
                    this.getPeople();
                });
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then((result) => {
                    this.getPeople();
                });
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id;
            let editName = this.$refs[`edit_${id}`][0];
            editName.name = name;
            editName.age = age;
            editName.job = job;
        },

        isEdit(id) {
            return this.editPersonId === id;
        },
    },

};
</script>

<style scoped>

</style>
