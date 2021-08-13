import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CoinDetails } from './pages/CoinDetails';
import { CoinSummary } from './pages/CoinSummary';
import Header from './components/Header';
import { WatchListContextProvider } from './context/WatchListContext';


function App(){
  return (
    <div  className='container'>
      <WatchListContextProvider>
        <Router>
          <Header />
          <Switch>
          <Route exact path='/' component={CoinSummary}/>
          <Route exact path='/coins/:id' component={CoinDetails}/>
          </Switch>
        </Router>
      </WatchListContextProvider>
    </div>
  )
}

export default App
