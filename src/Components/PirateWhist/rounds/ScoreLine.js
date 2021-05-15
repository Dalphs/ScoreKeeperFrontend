import React from 'react';
import TricksOrClubs from './TricksOrClubs'
import LadiesOrKing from './LadiesOrKing'
import SuperRound from './SuperRound'
import Solitaire from './Solitaire'

function ScoreLine(props) {

    const getRoundComponent = (round) => {
        console.log(round)
        switch(round.type) {
            case "Minus stik" : 
            case "Minus klør" :
                return <TricksOrClubs type={round === "Minus stik" ? "Minus stik" : "Minus klør"}></TricksOrClubs>
            case "Minus damer" :
            case "Klør konge" :
                return <LadiesOrKing type={round === "Minus damer" ? "Minus damer" : "Klør konge"}></LadiesOrKing>
            case "Super runde" :
                return <SuperRound></SuperRound>
            case "Kabale" : 
                return <Solitaire></Solitaire>
        }
    }

    return (
        <React.Fragment>
            <tr>
                {props.round.players.map(player => {
                    return <td>{player.points}</td>
                })}
            </tr>
            <tr>
                <td colSpan={4}>{getRoundComponent(props.round)}</td>
            </tr>
        </React.Fragment>
    );
}

export default ScoreLine;