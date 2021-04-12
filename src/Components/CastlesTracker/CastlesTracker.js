import {Row, Col, Container} from 'react-bootstrap'
import SelectablePlayer from '../SelectablePlayer/SelectablePlayer'
import PlayerNamesInit from '../PlayerNamesInit/PlayerNamesInit.js'
import './styles.css'
import Numberpad from '../Numberpad/Numberpad.js'
import {useRecoilState} from 'recoil'
import {castlesGameState} from '../../recoil/castlesGameState.js'
import {numberpadState} from '../../recoil/numberpadState'
import {numberpadSubtractState} from '../../recoil/numberpadSubtractState.js'
import {useEffect} from 'react'
import GameLog from '../GameLog/GameLog.js'
import {logState, addMessage} from '../../recoil/logState.js'



export default function CastlesTracker (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [display, setDisplay] = useRecoilState(numberpadState)
    const [numberpadSubtract] = useRecoilState(numberpadSubtractState)
    const [log, setLog] = useRecoilState(logState)

    useEffect(() => {
        setGame({users: [...game.users], state : 1})
        setLog({messages: addMessage(`Game has started`, log.messages)})
    }, [])

    let playerClicked = (id) => {
        let users = [...game.users];
        let player = {...users[id - 1]}
        player.points = numberpadSubtract.subtract ? Number(player.points) - Number(display.display) : Number(player.points) + Number(display.display);
        console.log(log)
        setLog({messages : addMessage(`${player.playerName} ${numberpadSubtract.subtract ? "mistede": "fik"} ${display.display} point`, log.messages)});
        users[id-1] = player;
        setDisplay({display: 0})
        setGame({state: game.state, users : users});
        
    }

    let currentScreen;
    console.log(game.state)
    if (game.state === 1){
        currentScreen = <Col id="nameInput1"><PlayerNamesInit numberOfPlayers={3} maxNumberOfPlayers={6}/></Col>
    } else if (game.state ===2) {
        currentScreen = <Row><Col><SelectablePlayer playerSelected={playerClicked}/><Numberpad/></Col>
        <Col><GameLog></GameLog></Col></Row>
    } else {
        currentScreen = <GameLog></GameLog>
    }
    

    return (
        <Container>
            <Row>
                <Col id="nameInput1">
                    {currentScreen}
                </Col>
            </Row>
        </Container>
    )
}