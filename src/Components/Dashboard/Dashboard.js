import {Container, Row, Col, Button} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import './styles.css'
import {currentScreenState} from '../../recoil/currentScreenState.js'
import {useEffect} from 'react'
import CastlesTracker from './../CastlesTracker/CastlesTracker.js'


export default function Dashboard (props) {

    const [currentScreen, setCurrentScreen] = useRecoilState(currentScreenState);
    
    //useEffect( () => {setCurrentScreen({currentScreen:"Castles"})}, [])
    
    return(
        <Container>
            <Row>
                <Col>
                {(() => {
                    let screen = currentScreen.currentScreen
                    if (screen === "Dashboard") {
                        return (<h1>DASHBOARD</h1>)
                    } else if (screen === "Castles") {
                        return <CastlesTracker/>
                    }
                })()}
                </Col>
            </Row>
        </Container>
    )
}