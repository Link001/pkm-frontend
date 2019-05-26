import {notTeacherGuard} from "../../guard/not-teacher-guard";
import LabsReview from './LabsReview';
import UsersList from "./users-list/UsersList";
import UserLabs from "./user-labs/UserLabs";

export const labsReviewRoutes = {
    path: 'teacher/labs-review',
    component: LabsReview,
    beforeEnter: notTeacherGuard,
    children: [
        {
            name: 'labs-review',
            path: '',
            component: UsersList
        },

        {
            name: 'user-labs',
            path: 'labs/:uid',
            component: UserLabs,
            props: true
        }
    ]
};
