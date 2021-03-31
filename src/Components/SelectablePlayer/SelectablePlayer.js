import {Row, Col, Container} from 'react-bootstrap'
import './styles.css'


export default function SelectablePlayer (props) {
    var clicked = () =>{
        console.log("Virker")
    }

    return (
        <Container className="container">
            <Row>
                
            </Row>
            <Row>
                <Col>
                    <button onClick={clicked}>Start Spil</button>
                </Col>
            </Row>
        </Container>
    )
}