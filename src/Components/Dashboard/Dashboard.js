import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import './styles.css'
import { useEffect } from 'react'
import CastlesTracker from './../CastlesTracker/CastlesTracker.js'


export default function Dashboard(props) {


    const gamesAvailable = [{ Name: "Castles", picture: "https://i.ytimg.com/vi/8RZ58y8wYhs/hqdefault.jpg" }]

    //useEffect( () => {setCurrentScreen({currentScreen:"Castles"})}, [])

    return (
        <Container>
            <Row>
                <Col>
                    {gamesAvailable.map((game, i) => {
                        <GameCard name={game.name} picture={game.picture}></GameCard>
                    })}
                </Col>
            </Row>
        </Container>
    )
}