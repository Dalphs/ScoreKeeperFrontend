import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import Dashboard from './Components/Dashboard/Dashboard.js'
import { castlesGameState } from './recoil/castlesGameState.js'
import { inputState } from './recoil/inputState.js'
import { numberpadState } from './recoil/numberpadState.js'
import { numberpadSubtractState } from './recoil/numberpadSubtractState.js'
import { logState } from './recoil/logState.js'
import Button from 'react-bootstrap/Button'
import { useRecoilState } from 'recoil';
import { currentScreenState } from '../../recoil/currentScreenState.js'

function App() {
  const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);
  const [game] = useRecoilState(castlesGameState);
  const [input] = useRecoilState(inputState)
  const [numberpadDisplay, setNumberpadDisplay] = useRecoilState(numberpadState);
  const [numberpadSubtract, setNumberpadSubtract] = useRecoilState(numberpadSubtractState);
  const [log, setLog] = useRecoilState(logState);

  const logCastlesState = () => {
    console.log(game);
  }
  const logInputState = () => {
    console.log(input);
  }
  const logNumberpadState = () => {
    console.log(numberpadDisplay);
  }
  const logNumberpadSubtractState = () => {
    console.log(numberpadSubtract);
  }
  const logLogState = () => {
    console.log(log);
  }

  return (
    <div className="App">
      <Banner></Banner>
      {false ? <div>
        <button onClick={logCastlesState}>Log game</button>
        <button onClick={logInputState}>Log inputs</button>
        <button onClick={logNumberpadState}>Log numberpad</button>
        <button onClick={logNumberpadSubtractState}>Log subtract</button>
        <button onClick={logLogState}>Log log</button>
      </div>
        : false}
      {(() => {
        let screen = currentScreen.currentScreen
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
