import {labReviewCommentsActions} from "./lab-review-comments-actions";
import {Database} from "../../../../firebase/database";

export const labReviewCommentsStore = {
    actions: {
        [labReviewCommentsActions.send]({ rootState }, { path, text }) {
            Database.instance.push(path, {
                text,
                uid: rootState.user.current.uid,
                date: Date.now()
            })
        }
    }
};
