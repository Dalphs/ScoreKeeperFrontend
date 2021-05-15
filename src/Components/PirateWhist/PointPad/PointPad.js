import { Row, Col, Container, Button } from 'react-bootstrap'
import './styles.css'
import React from 'react'
import ScoreLine from '@piratewhist/rounds/ScoreLine'


function PointPad(props) {

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
                                                <ScoreLine round={round}></ScoreLine>
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