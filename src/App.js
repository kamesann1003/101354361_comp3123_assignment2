import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/components/login">Login</Link>
            </li>
            <li>
              <Link to="/component/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
