import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/TasksPage/tasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
};