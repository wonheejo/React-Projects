import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Development from './components/pages/Development';
import Home from './components/pages/Home';
import Marketing from './components/pages/Marketing';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Design from './components/pages/Design';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/contactus' exact component={ContactUs} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/development' exact component={Development} />
        <Route path='/design' exact component={Design} />
      </Switch>
    </Router>
  );
}

export default App;
