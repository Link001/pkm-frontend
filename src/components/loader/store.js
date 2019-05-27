import {loaderActions} from "./loader-actions";

const mutations = {
    addToQueue: '[LOADER] Add To Queue',
    removeFromQueue: '[LOADER] Remove From Queue',
};

export const loaderStore = {
    state: {
        queue: {}
    },

    actions: {
        [loaderActions.addToQueue]({commit}, operationId) {
            commit(mutations.addToQueue, operationId);
        },

        [loaderActions.complete]({commit}, operationId) {
            commit(mutations.removeFromQueue, operationId);
        }
    },

    mutations: {
        [mutations.addToQueue](state, operationId) {
            state.queue[operationId] = true;
            state.queue = {...state.queue};
        },

        [mutations.removeFromQueue](state, operationId) {
            delete state.queue[operationId];
            state.queue = {...state.queue};
        }
    },

    getters: {
        isActiveLoader: ({ queue }) => !!Object.keys(queue).length
    }
};
