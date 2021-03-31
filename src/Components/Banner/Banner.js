import {Row, Col, Container} from 'react-bootstrap'
import './styles.css'


export default function Banner (props) {
    return (
        <Container className="bannerContainer">
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