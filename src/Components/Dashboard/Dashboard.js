import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css'
import GameCard from '@dashboard/GameCard/GameCard.js'


export default function Dashboard(props) {
    const gamesAvailable = [
        { name: "Castles", picture: "https://source.unsplash.com/random/400x200", url: "castles" }, 
        { name: "Pirat Whist", picture: "https://source.unsplash.com/random/400x200", url: "piratwhist"}]

    return (
        <Container>
            <Row className="spaceBetween">
                {gamesAvailable.map( (game, i) => (
                    <GameCard name={game.name} picture={game.picture} url={game.url}></GameCard>
                ))}
            </Row>
        </Container>
    )
}