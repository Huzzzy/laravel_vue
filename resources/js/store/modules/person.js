import router from "../../router";

const state = {
    person: null,
    people: null,
};

const getters = {
    person: (state) => state.person,
    people: (state) => state.people,
};

const actions = {
    getPerson({ commit }, id) {
        axios.get(`/api/people/${id}`).then((result) => {
            commit("setPerson", result.data.data);
        });
    },
    getPeople({ commit }) {
        axios.get("/api/people").then((result) => {
            commit("setPeople", result.data.data);
        });
    },
    deletePerson({ dispatch }, id) {
        axios.delete(`/api/people/${id}`).then((result) => {
            dispatch("getPeople");
        });
    },
    update({}, data) {
        axios
            .patch(`/api/people/${data.id}`, {
                name: data.name,
                age: data.age,
                job: data.job,
            })
            .then((result) => {
                router.push({
                    name: "person.show",
                    params: { id: data.id },
                });
            });
    },
    store({}, data) {
        axios
            .post("/api/people", {
                name: data.name,
                age: data.age,
                job: data.job,
            })
            .then((result) => {
                router.push({ name: "person.index" });
            });
    },
};

const mutations = {
    setPerson(state, person) {
        state.person = person;
    },
    setPeople(state, people) {
        state.people = people;
    },
};

export default { state, getters, mutations, actions };
