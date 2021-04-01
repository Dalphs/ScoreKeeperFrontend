import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import CastlesTracker from './Components/CastlesTracker/CastlesTracker.js'
import {castlesGameState} from './recoil/castlesGameState.js'
import Button from 'react-bootstrap/Button'
import {useRecoilState} from 'recoil';

function App() {
   const [game] = useRecoilState(castlesGameState);

   const logState = () =>{
     console.log(game);
   }

  return (
    <div className="App">
      <Banner></Banner>
      <button onClick={logState}>Log game</button>
      
      <CastlesTracker/>
    </div>
    
  );
}

export default App;
