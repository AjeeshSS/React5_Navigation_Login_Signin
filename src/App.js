import React from 'react';
import Login from './Components/login';
import Signup from './Components/signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
