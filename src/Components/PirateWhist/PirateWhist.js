import { Row, Col, Container, Button } from 'react-bootstrap'
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {pirateWhistState} from '@recoil/pirateWhistState.js'
import PointPad from './PointPad/PointPad'


export default function PirateWhist (props) {
    
    const [pirateWhist, setPirateWhist] = useRecoilState(pirateWhistState)

    useEffect(() => {
        /*const newObject = {...pirateWhist}
        newObject.players = props.players
        setPirateWhist(newObject)    */

        const newObject = {...pirateWhist}
        {console.log(newObject)}
        newObject.games[0].rounds[0] = {type: "Minus stik", players: [{name:"Søren", points: 1.25},{name:"Sune", points:1.25},{name:"Simon", points:0},{name:"Kira", points: 1.5}]}
        newObject.games[0].rounds[1] = {type: "Minus klør", players: [{name:"Søren", points: 2.5},{name:"Sune", points:2.5},{name:"Simon", points:0},{name:"Kira", points: 3}]}
        newObject.players = ["Søren", "Sune", "Simon", "Kira"]
        setPirateWhist(newObject)
    }, [])

    return (
        <Container>
            <Row>
                <Col id="nameInput1">
                    {console.log(pirateWhist.games)}
                    <PointPad players={pirateWhist.players} games={pirateWhist.games}></PointPad>
                </Col>
            </Row>
        </Container>
    )
}