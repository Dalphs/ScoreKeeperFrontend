
import { useRecoilState } from 'recoil';
import './styles.css'
import { useEffect } from 'react'
import { currentScreenState } from '../../recoil/currentScreenState.js'


export default function GameCard(props) {


    const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);
    let gameSelected = (gameChosen) => {
        setCurrentScreen({screen : gameChosen})
    }

    return (
        <div class="card" onClick={() => gameSelected(props.name)} style={{backgroundImage: `url(${props.picture})`}}>
            <p class="cardTitle">{props.name}</p>
        </div>
    )
}