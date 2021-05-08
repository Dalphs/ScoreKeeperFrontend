import {Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './styles.css'
import DashboardIcon from '@assets/svg/dashboard.svg'


export default function Banner (props) {
    

    return (
        <Container className="bannerContainer">
         <Row>
            <Col xs={2}></Col>
            <Col>
                <h1>ScoreKeeper</h1>
            </Col>
            <Col xs={2} className="my-auto d-flex justify-content-end"><Link to="/" className="iconContainer"><img className="icon" src={DashboardIcon}></img></Link></Col>
        </Row>
        </Container>
    )
}