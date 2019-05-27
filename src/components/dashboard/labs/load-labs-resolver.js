import {store} from "../../../store";
import {labsActions} from "./labs-actions";
import {loaderActions} from "../../loader/loader-actions";

export function loadLabsResolver(from, to, next) {
    const loaderKey = '[DASHBOARD:LABS] Fetch Labs';

    store.dispatch(loaderActions.addToQueue, loaderKey);

    function complete() {
        store.dispatch(loaderActions.complete, loaderKey);
        next();
    }
    store.dispatch(labsActions.fetch).then(complete);
}
