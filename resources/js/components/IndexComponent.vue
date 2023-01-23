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
                    <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                    <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from './EditComponent.vue';
import ShowComponent from './ShowComponent.vue';

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
        ShowComponent,
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
