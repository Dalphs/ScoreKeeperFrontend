import { Container, Row, Col, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import './styles.css'
import { useEffect } from 'react'
import GameCard from './../GameCard/GameCard.js'


export default function Dashboard(props) {
    const gamesAvailable = [{ name: "Castles", picture: "https://source.unsplash.com/random/400x200" }, { name: "Castles", picture: "https://source.unsplash.com/random/400x200" }, { name: "Castles", picture: "https://source.unsplash.com/random/400x200" }]

    return (
        <Container>
            <Row className="spaceBetween">
                {gamesAvailable.map( (game, i) => (
                    <GameCard name={game.name} picture={game.picture}></GameCard>
                ))}
            </Row>
        </Container>
    )
}