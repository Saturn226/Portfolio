import React from 'react';
import HeaderContainer from './containers/header';
import { Home, About, Blog, Post } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import ScrollToTop from './helpers/scrollToTop';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/blog'>
          <Blog />
        </Route>

        <Route path='/posts/:slug'>
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}
