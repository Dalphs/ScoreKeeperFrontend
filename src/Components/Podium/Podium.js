import {Container, Row, Col} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '../../recoil/castlesGameState.js'
import {Button, ClickAwayListener} from '@material-ui/core' 
import {useEffect} from 'react'

export default function Podium (props) {

    let currentScreen = [];

    
    let players = [...props.players];
    let playersSorted= players.sort(function(x,y){return y["points"]-x["points"]});
    
    let actualNumberOfRuns = 1;
    for (let i = 0; i < playersSorted.length; i++) {
        let startIndex = i
        let currentValue = playersSorted[i].points;

        for (let j = startIndex +1; j < playersSorted.length; j++) {
            if(currentValue === playersSorted[j].points)
                currentValue++
            else    
                break
        }
        switch (i) {
            case 0:
        }

        i = startIndex;
        actualNumberOfRuns++
    }
    currentScreen.push(<h1 key="uu">Virker</h1>)
    currentScreen.push(<h2 key="pp">Det</h2>)
    
    

   
    
    return(
        <Col>{currentScreen}</Col>
    )
}