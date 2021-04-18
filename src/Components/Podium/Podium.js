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
        let podiumText = `${actualNumberOfRuns}`
        let currentValue = playersSorted[i].points;

        
        for (let j = startIndex; j < playersSorted.length; j++) {
            if(currentValue === playersSorted[j].points){
                podiumText += j === startIndex ? ` ${playersSorted[j].playerName}` : ` og ${playersSorted[j].playerName}`
                if (j !== startIndex) {
                    startIndex++;
                }
            } else {
                break
            }    
        }
        switch (i) {
            case 0:
                currentScreen.push(<h1>{podiumText}</h1>)
                break
            case 1:
                currentScreen.push(<h2>{podiumText}</h2>)
                break
            case 2:
                currentScreen.push(<h3>{podiumText}</h3>)
                break
            case 3:
                currentScreen.push(<h4>{podiumText}</h4>)
                break
            case 4:
                currentScreen.push(<h5>{podiumText}</h5>)
                break
            default:
               <p>Hvorfor nævne noget lavere</p>

        }
        i = startIndex 
        actualNumberOfRuns++
    }
    
    

   
    
    return(
        <Col>{currentScreen}</Col>
    )
}