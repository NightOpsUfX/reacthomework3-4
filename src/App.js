import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";
import User from "./components/user/User";


export default function App() {
  return (

      <Router>
        <div>
          <Link to={'/users'}>
            Users page
          </Link>
        </div>

        <Switch>
          <Route path={'/users'} component={Users}/>
        </Switch>
      </Router>
  )
}