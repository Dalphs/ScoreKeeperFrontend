import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import CastlesTracker from './Components/CastlesTracker/CastlesTracker.js'
import {castlesGameState} from './recoil/castlesGameState.js'
import {inputState} from './recoil/inputState.js'
import Button from 'react-bootstrap/Button'
import {useRecoilState} from 'recoil';

function App() {
   const [game] = useRecoilState(castlesGameState);
   const [input] = useRecoilState(inputState)

   const logCastlesState = () =>{
     console.log(game);
   }
   const logInputState = () =>{
    console.log(input);
  }

  return (
    <div className="App">
      <Banner></Banner>
      <button onClick={logCastlesState}>Log game</button>
      <button onClick={logInputState}>Log inputs</button>
      
      <CastlesTracker/>
    </div>
    
  );
}

export default App;
