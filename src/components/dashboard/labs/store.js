import {labsActions} from "./labs-actions";
import {Database} from "../../../firebase/database";
import {Lab} from "../../../models/lab";
import {Storage} from "../../../firebase/storage";
import {labsReviewStore} from "./labs-review/store";
import {labReviewCommentsStore} from "./lab-review/lab-review-comments-store";
import {loaderActions} from "../../loader/loader-actions";

const mutations = {
    set: '[LABS] Set'
};

export const labsStore = {
    modules: {
        reviews: labsReviewStore,
        reviewComments: labReviewCommentsStore
    },

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
            const loaderKey = '[DASHBOARD:LABS] Complete Task';
            dispatch(loaderActions.addToQueue, loaderKey);

            dispatch(labsActions.uploadCompletedTask, file).then(({ downloadUrl }) => {
                const userId = rootState.user.current.uid;

                Database.instance
                    .update(`labs-reviews/${userId}/labs/${lab.id}`, {reportUrl: downloadUrl })
                    .then(() => dispatch(loaderActions.complete, loaderKey))
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
