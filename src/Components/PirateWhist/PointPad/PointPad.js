import React, { useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import './styles.css'

function PointPad(props) {

    getRoundComponent = (round) =>{
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
                                                <th>player</th>
                                            )
                                        })}

                                    </tr>
                                    {game.rounds.map((round) => {
                                        return (
                                                {getRoundComponent(round)}
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