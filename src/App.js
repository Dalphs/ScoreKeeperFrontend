import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import CastlesTracker from './Components/CastlesTracker/CastlesTracker.js'
import {castlesGameState} from './recoil/castlesGameState.js'
import {inputState} from './recoil/inputState.js'
import {numberpadState} from './recoil/numberpadState.js'
import {numberpadSubtractState} from './recoil/numberpadSubtractState.js'
import Button from 'react-bootstrap/Button'
import {useRecoilState} from 'recoil';

function App() {
   const [game] = useRecoilState(castlesGameState);
   const [input] = useRecoilState(inputState)
   const [numberpadDisplay, setNumberpadDisplay] = useRecoilState(numberpadState);
    const [numberpadSubtract, setNumberpadSubtract]  =useRecoilState(numberpadSubtractState);

   const logCastlesState = () =>{
     console.log(game);
   }
   const logInputState = () =>{
    console.log(input);
  }
  const logNumberpadState = () =>{
    console.log(numberpadDisplay);
  }
  const logNumberpadSubtractState = () =>{
   console.log(numberpadSubtract);
 }

  return (
    <div className="App">
      <Banner></Banner>
      {true ? <div>
                <button onClick={logCastlesState}>Log game</button>
                <button onClick={logInputState}>Log inputs</button>
                <button onClick={logNumberpadState}>Log numberpad</button>
                <button onClick={logNumberpadSubtractState}>Log subtract</button>
                </div> 
        : false}
      
      
      <CastlesTracker/>
    </div>
    
  );
}

export default App;
