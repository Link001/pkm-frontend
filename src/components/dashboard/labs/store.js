import {labsActions} from "./labs-actions";
import {database} from "../../../firebase";
import {Lab} from "../../../models/lab";

const mutations = {
    set: '[LABS] Set'
};

export const labsStore = {
    state: {
        labs: []
    },

    actions: {
        [labsActions.fetch]({commit}) {
            return database.get('labs')
                .then(snapshot => Lab.fromDatabaseArraySnapshot(snapshot))
                .then(labs => commit(mutations.set, labs));
        }
    },

    mutations: {
        [mutations.set](state, labs) {
            state.labs = labs;
        }
    }
};