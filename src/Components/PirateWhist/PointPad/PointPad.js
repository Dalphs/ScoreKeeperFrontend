import { Row, Col, Container, Button } from 'react-bootstrap'
import './styles.css'
import React from 'react'
import ScoreLine from '@piratewhist/rounds/ScoreLine'


function PointPad(props) {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <div className="df-jcc">
                    <table>
                        {props.games.map((game) => {
                            return (
                                <React.Fragment>
                                    <tr className="playerHeader">
                                        {props.players.map((player) => {
                                            return (
                                                <th>{player}</th>
                                            )
                                        })}

                                    </tr>
                                    {game.rounds.map((round) => {
                                        return(
                                                <ScoreLine round={round}></ScoreLine>
                                        )
                                       
                                    })}
                                </React.Fragment>

                            )
                        })}
                    </table>
                </div>
            </Row>
        </Container>
    );
}

export default PointPad;