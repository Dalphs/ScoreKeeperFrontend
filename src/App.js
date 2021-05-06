import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import Dashboard from './Components/Dashboard/Dashboard.js'
import { castlesGameState } from './recoil/castlesGameState.js'
import { inputState } from './recoil/inputState.js'
import { logState } from './recoil/logState.js'
import { useRecoilState } from 'recoil';
import { currentScreenState } from './recoil/currentScreenState.js'
import { scoreInputState } from './recoil/scoreInputState.js'
import CastlesTracker from './Components/CastlesTracker/CastlesTracker.js'

function App() {
  const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);
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
      <Banner></Banner>
      {true ? <div>
        <button onClick={logCastlesState}>Log game</button>
        <button onClick={logInputState}>Log inputs</button>
        <button onClick={logLogState}>Log log</button>
        <button onClick={logScoreInput}>Log input</button>
      </div>
        : false}
      {(() => {
        let screen = currentScreen.screen
        if (screen === "Dashboard") {
          return <Dashboard />
        } else if (screen === "Castles") {
          return <CastlesTracker />
        }
      })()}
    </div>

  );
}

export default App;
