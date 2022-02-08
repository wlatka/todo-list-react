import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/Tasks";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/autor">
            O autorze
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);