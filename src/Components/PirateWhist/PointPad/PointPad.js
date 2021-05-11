import React, {useEffect} from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import {useRecoilState} from 'recoil';
import {pirateWhistState} from '@recoil/pirateWhistState.js'
import './styles.css'

function PointPad(props) {
    const [pirateWhist, setPirateWhist] = useRecoilState(pirateWhistState)

    useEffect(() => {
        pirateWhist.setPirateWhist({players: [props.players]})    
    }, [])


    return (
        <Container>
            <Row>
                <Col>
                    <table>
                        <tr className="gameHead">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default PointPad;