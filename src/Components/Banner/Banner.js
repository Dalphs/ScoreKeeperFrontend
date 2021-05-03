import {Row, Col, Container} from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import './styles.css'
import { currentScreenState } from '../../recoil/currentScreenState.js'
import DashboardIcon from '../../assets/svg/dashboard.svg'


export default function Banner (props) {
    const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);
    const dashboardIconClicked = () =>{
        setCurrentScreen({screen: "Dashboard"})
    }

    return (
        <Container className="bannerContainer">
         <Row>
            <Col xs={2}></Col>
            <Col>
                <h1>ScoreKeeper</h1>
            </Col>
            <Col xs={2} className="my-auto d-flex justify-content-end"><div className="iconContainer"><img className="icon" src={DashboardIcon} onClick={dashboardIconClicked}></img></div></Col>
        </Row>
        </Container>
    )
}