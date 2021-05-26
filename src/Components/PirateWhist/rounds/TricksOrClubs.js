import React from 'react';
import { pirateWhistState } from '@recoil/pirateWhistState.js'
import { useRecoilState } from 'recoil'

function TricksOrClubs(props) {
    const [pirateSession, setPirateSession] = useRecoilState(pirateWhistState)

    const increaseCount = (playerId, increase) => {
        let currentSession = JSON.parse(JSON.stringify(pirateSession))
        console.log(currentSession)
        

        let currentGame, currentRound
        currentSession.games.forEach((game) => {
            console.log(game)
            if (game.id === props.gameId){
                currentGame = game
            }
        })
        console.log(currentGame)
        currentGame.rounds.forEach( round => {
            if(round.id === props.round.id)
                currentRound = round
        })

        currentRound.players.forEach( player => {
            if(player.id === playerId)
                player.event.pointGivingEvents = player.event.pointGivingEvents + increase;
        })
        setPirateSession(currentSession)
        
    }

    return (
        <div>{console.log(props.round.players)}
            <p>Hvor mange {props.round.type === "Minus stik" ? "stik" : "klør"} fik hver spiller:</p>
            <div className="scoreGiver df fdr">
                {props.round.players.map((player) => {
                    return (
                        < div className="scoreComponent df fdc" >
                            <button onClick={() => increaseCount(player.id, 1)}>+</button>
                            <p>{player.event.pointGivingEvents}</p>
                            <button onClick={() => increaseCount(player.id, -1)}>-</button>
                        </div>
                    )
                })}


            </div>
        </div >
    );
}

export default TricksOrClubs;