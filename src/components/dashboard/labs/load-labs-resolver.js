import {store} from "../../../store";
import {labsActions} from "./labs-actions";

export function loadLabsResolver(from, to, next) {
    store.dispatch(labsActions.fetch).then(next);
}
