
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Overview, Majorcoins, Altcoins } from './pages/Overview';
import { Markets, Asia, Europe, US } from './pages/Markets';
import { Derivatives } from './pages/Derivatives';
import { Futures } from './pages/Futures';
import { Development } from './pages/Development'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/majorcoins' exact component={Majorcoins} />
        <Route path='/overview/altcoins' exact component={Altcoins} />
        <Route path='/markets' exact component={Markets} />
        <Route path='/markets/asia' exact component={Asia} />
        <Route path='/markets/europe' exact component={Europe} />
        <Route path='/markets/us' exact component={US} />
        <Route path='/futures' exact component={Futures} />
        <Route path='/derivatives' exact component={Derivatives} />
        <Route path='/development' exact component={Development} />
      </Switch>
    </Router>
  );
}

export default App;
