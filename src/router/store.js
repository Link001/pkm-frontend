import {routerActions} from "./router-actions";
import {router} from "./index";

export const routerStore = {
    actions: {
        [routerActions.toGo](_, route) {
            router.push(route);
        }
    }
};
