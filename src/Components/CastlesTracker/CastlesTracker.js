import {Row, Col, Container} from 'react-bootstrap'
import SelectablePlayer from '../SelectablePlayer/SelectablePlayer'
import PlayerNamesInit from '../PlayerNamesInit/PlayerNamesInit.js'
import './styles.css'


export default function CastlesTracker (props) {
    return (
        <Container>
            <Row>
                <Col>
                    <PlayerNamesInit numberOfPlayers={4} maxNumberOfPlayers={6}/>
                </Col>
            </Row>
        </Container>
    )
}