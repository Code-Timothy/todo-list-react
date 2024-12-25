import Tasks from "./features/tasks/index";
import Author from "./features/author/index";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
    <HashRouter>
        <Link to="/zadania">Zadania</Link>
        <Link to="/autor">O autorze</Link>
        <Switch>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
)

export default App;