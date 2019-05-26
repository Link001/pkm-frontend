import {labsReviewsActions} from "./labsReviewActions";
import {Database} from "../../../../firebase/database";
import {UserLabs} from "../../../../models/labs-reviews/user-labs";

const mutations = {
    setListener: '[LABS_REVIEW] Set Listener',
    setLabsReview: '[LABS_REVIEW] Set Labs Reviews'
};

export const labsReviewStore = {
    state: {
        labsReviews: [],
        changesListener: null
    },

    actions: {
        [labsReviewsActions.listenChanges]({commit}) {
            function onChanged(snapshot) {
                UserLabs.fromDatabaseArraySnapshot(snapshot).then(labsReviews => {
                    commit(mutations.setLabsReview, labsReviews);
                })
            }
            Database.instance.listen('labs-reviews', onChanged);
            commit(mutations.setListener, onChanged);
        },

        [labsReviewsActions.removeChangesListener]({commit, state}) {
            Database.instance.stopListening('labs-review', state.changesListener);
            commit(mutations.setListener, null);
        }
    },

    mutations: {
        [mutations.setListener](state, listener) {
            state.listener = listener;
        },

        [mutations.setLabsReview](state, labsReviews) {
            state.labsReviews = labsReviews;
        }
    },

    getters: {
        findUserLabs({ labsReviews }) {
            return uid => labsReviews.find(review => review.user.uid === uid)
        },

        findUserLab({labsReviews}, { findUserLabs }) {
            return (uid, labId) => {
                const userLabs = findUserLabs(uid);
                if (!userLabs) return null;

                return  userLabs.labs.find(review => review.lab.id === labId);
            }
        }
    }
};
