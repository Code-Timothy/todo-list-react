import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";
import { toTasks, toAuthor, toTask } from "./routes";

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter >
);

export default App;