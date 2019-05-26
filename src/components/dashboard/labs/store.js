import {labsActions} from "./labs-actions";
import {Database} from "../../../firebase/database";
import {Lab} from "../../../models/lab";
import {Storage} from "../../../firebase/storage";

const mutations = {
    set: '[LABS] Set'
};

export const labsStore = {
    state: {
        labs: []
    },

    actions: {
        [labsActions.fetch]({commit}) {
            return Database.instance.get('labs')
                .then(snapshot => Lab.fromDatabaseArraySnapshot(snapshot))
                .then(labs => commit(mutations.set, labs));
        },

        [labsActions.completeTask]({ dispatch, rootState }, { file, lab }) {
            dispatch(labsActions.uploadCompletedTask, file).then(({ downloadUrl }) => {
                const userId = rootState.user.current.uid;

                Database.instance.push(`labs-reviews/${userId}/${lab.id}`, {
                    completedTask: downloadUrl
                })
            });
        },

        [labsActions.uploadCompletedTask](_, file) {
            return Storage.instance.upload(file, 'labs');
        }
    },

    mutations: {
        [mutations.set](state, labs) {
            state.labs = labs;
        }
    }
};
