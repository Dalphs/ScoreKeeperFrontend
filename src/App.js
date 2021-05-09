import { useRecoilState } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Banner from './Components/Banner/Banner.js'
import Dashboard from './Components/Dashboard/Dashboard.js'
import Castles from './Components/Castles/Castles.js'

import PirateWhist from './Components/PirateWhist/PirateWhist'

import { castlesGameState } from './recoil/castlesGameState.js'
import { inputState } from './recoil/inputState.js'
import { logState } from './recoil/logState.js'
import { scoreInputState } from './recoil/scoreInputState.js'


function App() {
  const [game] = useRecoilState(castlesGameState);
  const [input] = useRecoilState(inputState)
  const [scoreInput, setScoreInput] = useRecoilState(scoreInputState)
  const [log, setLog] = useRecoilState(logState);

  const logCastlesState = () => {
    console.log(game);
  }
  const logInputState = () => {
    console.log(input);
  }
  const logLogState = () => {
    console.log(log);
  }
  const logScoreInput = () => {
    console.log(scoreInput)
  }

  return (
    <div className="App">
      <Router>
        <Banner></Banner>
        {true ? <div>
          <button onClick={logCastlesState}>Log game</button>
          <button onClick={logInputState}>Log inputs</button>
          <button onClick={logLogState}>Log log</button>
          <button onClick={logScoreInput}>Log input</button>
        </div>
          : false}

          <Switch>
            <Route path="/castles" component={Castles}></Route>  
            <Route path="/piratwhist" component={PirateWhist}></Route>
            <Route path="/" component={Dashboard}></Route>
          </Switch>
      </Router>
    </div>

  );
}

export default App;
