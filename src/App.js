import React from 'react';
import HeaderContainer from './containers/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <HeaderContainer></HeaderContainer>
      <div className='App'>Hello World</div>
    </Router>
  );
}
