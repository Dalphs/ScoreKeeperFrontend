import { Row, Col, Container, Button } from 'react-bootstrap'
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {pirateWhistState} from '@recoil/pirateWhistState.js'
import PointPad from './PointPad/PointPad'


export default function PirateWhist (props) {
    
    const [pirateWhist, setPirateWhist] = useRecoilState(pirateWhistState)

    useEffect(() => {
        const newObject = {...pirateWhist}
        newObject.players = props.players
        setPirateWhist(newObject)    
    }, [])

    return (
        <Container>
            <Row>
                <Col id="nameInput1">
                    <PointPad></PointPad>
                </Col>
            </Row>
        </Container>
    )
}