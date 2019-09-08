import React from 'react';
import Home from './home/Home'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

import './App.css'

function App() {
  return (
    <div class="app-main">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Home} />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/signup" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;