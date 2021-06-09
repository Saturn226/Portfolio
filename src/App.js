import React from 'react';
import HeaderContainer from './containers/header';
import { Home } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}
