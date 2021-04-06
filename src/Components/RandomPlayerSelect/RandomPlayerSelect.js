import {Row, Col, Container} from 'react-bootstrap'
import './styles.css'


export default function RandomPlayerSelect (props) {
    return (
        <Container>
            <Row>
                <Col xs={2}></Col>
                <Col>
                    <h1>ScoreKeeper</h1>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}