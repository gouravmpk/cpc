import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Book from './components/pages/Book';
import SignUp from './components/pages/SignUp';
import Rats from './components/pages/Rats';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/book' component={Book} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/rats' component={Rats} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
