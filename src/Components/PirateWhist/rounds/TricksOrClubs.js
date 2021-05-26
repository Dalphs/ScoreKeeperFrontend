import React from 'react';
import { pirateWhistState } from '@recoil/pirateWhistState.js'
import { useRecoilState } from 'recoil'

function TricksOrClubs(props) {
    const [pirateSession, setPirateSession] = useRecoilState(pirateWhistState)

    const increaseCount = (playerId) => {
        let currentSession = {...pirateSession}
        console.log(currentSession)
        

        let currentGame = currentSession.games.forEach((game) => {
            console.log(game)
            if (game.id === props.gameId){
                return game
            }
        })
        console.log(currentGame)
        let currentRound = currentGame.rounds.forEach( round => {
            if(round.id === props.round.id)
                return round
        })

        currentRound.players.forEach( player => {
            if(player.id === playerId)
                player.pointGivingEvents ++;
        })
        
    }

    const decreaseCount = (playerId) => {

    }

    return (
        <div>{console.log(props.round.players)}
            <p>Hvor mange {props.round.type === "Minus stik" ? "stik" : "klør"} fik hver spiller:</p>
            <div className="scoreGiver df fdr">
                {props.round.players.map((player) => {
                    return (
                        < div className="scoreComponent df fdc" >
                            <button onClick={() => increaseCount(player.id)}>+</button>
                            <p>{player.event.pointGivingEvents}</p>
                            <button onClick={() => decreaseCount(player.id)}>-</button>
                        </div>
                    )
                })}


            </div>
        </div >
    );
}

export default TricksOrClubs;