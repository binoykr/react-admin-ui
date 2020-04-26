import React from 'react';
import Main from './components/Main'
import Home from './home/Home'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import DashboardMainPage from './pages/DashboardMainPage'


import './App.css'

function App() {
  return (
    <Main>

      <Router>
        <Switch>
          <Route exact path="/login" component={Home} />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/signup" component={Home} />

          <Route path="/" component={DashboardMainPage} />

        </Switch>
      </Router>

    </Main>
  );
}

export default App;