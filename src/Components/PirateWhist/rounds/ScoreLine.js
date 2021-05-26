import React, {useState} from 'react';
import TricksOrClubs from './TricksOrClubs'
import LadiesOrKing from './LadiesOrKing'
import SuperRound from './SuperRound'
import Solitaire from './Solitaire'
import './styles.css'

function ScoreLine(props) {

    const [showRoundComponent, setShowRoundComponent] = useState(false)

    const getRoundComponent = (round) => {
        console.log(round)
        switch(round.type) {
            case "Minus stik" : 
            case "Minus klør" :
                return <TricksOrClubs gameId={props.gameId} round={round}></TricksOrClubs>
            case "Minus damer" :
            case "Klør konge" :
                return <LadiesOrKing gameId={props.gameId} round={round}></LadiesOrKing>
            case "Super runde" :
                return <SuperRound gameId={props.gameId} round={round}></SuperRound>
            case "Kabale" : 
                return <Solitaire gameId={props.gameId} round={round}></Solitaire>
        }
    }

    return (
        <React.Fragment>
            <tr className="scoreRow" onClick={() => setShowRoundComponent(!showRoundComponent)}>
                {props.round.players.map(player => {
                    return <td>{player.pointsBeforeEvent + player.event.points}</td>
                })}
            </tr>
            <tr>
                <td className={`accordian ${showRoundComponent ? "" : "hidden"}`} colSpan={4}>{getRoundComponent(props.round)}</td>
            </tr>
        </React.Fragment>
    );
}

export default ScoreLine;