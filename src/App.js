import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Users from "./components/users/Users";



export default function App() {
  return (
      <Router>
        <div className={'mainWrapper'}>
            <div className={'linksWrapper'}>
                <Link to={'/users'}>
                    Users page
                </Link>
            </div>
            <div className={'contentWrapper'}>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                </Switch>
            </div>
        </div>
      </Router>
  )
}