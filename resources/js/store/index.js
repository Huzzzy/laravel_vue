import { createStore } from "vuex";
import Person from "./modules/person";

// Create a new store instance.
const store = createStore({
    modules: {
        Person,
    },
});

// Install the store instance as a plugin
export default store;
