import React, { useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import './styles.css'
import TricksOrClubs from '@piratewhist/rounds/TricksOrClubs'
import LadiesOrKing from '@piratewhist/rounds/LadiesOrKing'
import SuperRound from '@piratewhist/rounds/SuperRound'
import Solitaire from '@piratewhist/rounds/Solitaire'

function PointPad(props) {

    let getRoundComponent = (round) =>{
        switch(round) {
            case "Minus stik" : 
            case "Minus klør" :
                return <TricksOrClubs type={round === "Minus stik" ? "tricks" : "clubs"}></TricksOrClubs>
            case "Minus damer" :
            case "Klør konge" :
                return <LadiesOrKing type={round === "Minus damer" ? "damer" : "konge"}></LadiesOrKing>
            case "Super runde" :
                return <SuperRound></SuperRound>
            case "Solitaire" : 
                return <Solitaire></Solitaire>
        }
    } 

    return (
        <Container>
            <Row>
                <Col>
                    <table>
                        {props.games.map((game) => {
                            return (
                                <React.Fragment>
                                    <tr>
                                        {props.players.map((player) => {
                                            return (
                                                <th>{player}</th>
                                            )
                                        })}

                                    </tr>
                                    {game.rounds.map((round) => {
                                        return(
                                            <tr>
                                                {getRoundComponent(round.name)}
                                            </tr>
                                        )
                                       
                                    })}
                                </React.Fragment>

                            )
                        })}
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default PointPad;