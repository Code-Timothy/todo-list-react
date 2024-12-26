import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/index";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
    <HashRouter>
        <Link to="/zadania">Zadania</Link>
        <Link to="/autor">O autorze</Link>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
)

export default App;