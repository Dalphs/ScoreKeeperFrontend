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
                return <TricksOrClubs round={round}></TricksOrClubs>
            case "Minus damer" :
            case "Klør konge" :
                return <LadiesOrKing round={round}></LadiesOrKing>
            case "Super runde" :
                return <SuperRound round={round}></SuperRound>
            case "Kabale" : 
                return <Solitaire round={round}></Solitaire>
        }
    }

    return (
        <React.Fragment>
            <tr className="scoreRow" onClick={() => setShowRoundComponent(!showRoundComponent)}>
                {props.round.players.map(player => {
                    return <td>{player.points}</td>
                })}
            </tr>
            <tr>
                <td className={`accordian ${showRoundComponent ? "" : "hidden"}`} colSpan={4}>{getRoundComponent(props.round)}</td>
            </tr>
        </React.Fragment>
    );
}

export default ScoreLine;