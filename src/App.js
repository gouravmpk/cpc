import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Book from './components/pages/Book';
import Rats from './components/pages/Rats';
import Silverfish from './components/pages/Sliverfish';
import Spider from './components/pages/Spider';
import Mosquitoes from './components/pages/Mosquitoes';
import Snakes from './components/pages/Snakes';
import Bandicoots from './components/pages/Bandicoots';
import Termites from './components/pages/Termites';
import Beehive from './components/pages/Beehive';
import Cockroaches from './components/pages/cockroaches';
import Ants from './components/pages/Ants';
import BedBugs from './components/pages/Bedbugs';
import Lizard from './components/pages/Lizard';
import WoodBorer from './components/pages/WoodBorer';
import Housefiles from './components/pages/housefiles';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/book' component={Book} />
          <Route path='/rats' component={Rats} />
          <Route path='/spider' component={Spider} />
          <Route path='/mosquitoes' component={Mosquitoes} />
          <Route path='/snakes' component={Snakes} />
          <Route path='/bandicoots' component={Bandicoots} />
          <Route path='/bee-hive' component={Beehive} />
          <Route path='/termite' component={Termites} />
          <Route path='/cockroaches' component={Cockroaches} />
          <Route path='/silverfish' component={Silverfish} />
          <Route path='/ants' component={Ants} />
          <Route path='/bedbugs' component={BedBugs} />
          <Route path='/lizard' component={Lizard} />
          <Route path='/wood-borer' component={WoodBorer} />
          <Route path='/housefiles' component={Housefiles} />
        

        </Switch>
      </Router>
    </>
  );
}

export default App;
