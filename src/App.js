import React from 'react';
import './App.css';
import CalcHead from './components/CalcHead/Calc';
import CalcContainer from './components/CalcBody/CalcContainer'
import { Switch, Route } from 'react-router-dom';
import ResultsContainer from './components/CalcResults/ResultsContainer';


function App() {
  return (
    <div className="App">
      <CalcHead />
      <Switch>
        <Route exact path='/' render={ () =><CalcContainer />}/>
        <Route path='/results' render={ () =><ResultsContainer />}/>
      </Switch>
    </div>
  );
}

export default App;
