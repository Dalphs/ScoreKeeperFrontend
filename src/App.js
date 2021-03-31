import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner.js'
import CastlesTracker from './Components/CastlesTracker/CastlesTracker.js'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CastlesTracker/>
    </div>
    
  );
}

export default App;
