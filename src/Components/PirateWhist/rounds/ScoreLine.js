import React from 'react';
import TricksOrClubs from './TricksOrClubs'
import LadiesOrKing from './LadiesOrKing'
import SuperRound from './SuperRound'
import Solitaire from './Solitaire'

function ScoreLine(props) {
    return (
        <React.Fragment>
            {props.round.players.map(player => {
                return <td>{player.points}</td>
            })}
        </React.Fragment>
    );
}

export default ScoreLine;