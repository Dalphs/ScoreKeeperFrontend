import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import './styles.css'
import { useEffect } from 'react'
import GameCard from './../GameCard/GameCard.js'


export default function Dashboard(props) {


    const gamesAvailable = [{ name: "Castles", picture: "https://i.ytimg.com/vi/8RZ58y8wYhs/hqdefault.jpg" }]

    //useEffect( () => {setCurrentScreen({currentScreen:"Castles"})}, [])

    return (
        <Container>
            <Row>
                <Col>
                    <GameCard name="Castles" picture="https://i.ytimg.com/vi/8RZ58y8wYhs/hqdefault.jpg"></GameCard>
                </Col>
            </Row>
        </Container>
    )
}