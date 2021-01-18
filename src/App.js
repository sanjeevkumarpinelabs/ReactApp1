//import logo from './logo.svg';
import {Route, Switch ,BrowserRouter as Router,Link} from 'react-router-dom'
import './App.css';
import { UserForm } from './components/userform/userform'
import Home from './components/home'
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
              <li> 
                <Link to="home">Home</Link> 
              </li>
              <li> 
                <Link to="UserForm">UserForm</Link> 
              </li>
          </ul>
        </nav>
        <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/userform'>
               <UserForm label='first name' color='green'/>
            </Route>
        </Switch>
      </Router>
     {/* <UserForm label='first name' color='cyan'/> */}
    </div>
  );
}

export default App;
