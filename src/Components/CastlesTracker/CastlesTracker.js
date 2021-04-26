import {Row, Col, Container, Button} from 'react-bootstrap'
import SelectablePlayer from '../SelectablePlayer/SelectablePlayer'
import PlayerNamesInit from '../PlayerNamesInit/PlayerNamesInit.js'
import './styles.css'
import Numberpad from '../Numberpad/Numberpad.js'
import Podium from '../Podium/Podium.js'
import {useRecoilState} from 'recoil'
import {castlesGameState} from '../../recoil/castlesGameState.js'
import {numberpadState} from '../../recoil/numberpadState'
import {numberpadSubtractState} from '../../recoil/numberpadSubtractState.js'
import {useEffect, useRef} from 'react'
import GameLog from '../GameLog/GameLog.js'
import {logState, addMessage, updateTime} from '../../recoil/logState.js'
import {scoreInputState} from '../../recoil/scoreInputState.js'



export default function CastlesTracker (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [log, setLog] = useRecoilState(logState)
    const [scoreInput, setScoreInput] = useRecoilState(scoreInputState)

    useEffect(() => {
        setGame({users: [...game.users], state : 1})
        setLog({messages: addMessage(`Game has started`, log.messages)})
        /*setGame({users: [{id:1, playerName: "Simon", points:25}, {id:2, playerName: "Sune", points:10}, {id:3, playerName: "Søren", points:25}, {id:4, playerName: "Kira", points:10}], state : 2})
        setLog({messages: [
            {
                "timestamp": 1618340696,
                "timeString": "Ny",
                "text": "Game has started"
            },
            {
                "timestamp": 1618340722,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340723,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340723,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340724,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340725,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340725,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340726,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340727,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340727,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340728,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340728,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340729,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340730,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340730,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340731,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340731,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340732,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            },
            {
                "timestamp": 1618340733,
                "timeString": "Ny",
                "text": "Simon fik 1 point"
            }
        ]})*/
        
        const updateInterval = setInterval(() => {
            setLog(prev => {
                return {messages: updateTime(prev.messages)}
            })
        } ,10000)
        return () => clearInterval(updateInterval);
    }, [])

    let endGame = () => {
        setGame({users: game.users, state : 3})
    }

    let currentScreen;
    if (game.state === 1){
        currentScreen = <Col id="nameInput1"><PlayerNamesInit numberOfPlayers={3} maxNumberOfPlayers={6}/></Col>
    } else if (game.state ===2) {
        currentScreen = (
        <Col>
            <Row>
                <SelectablePlayer/>
                {/*<Numberpad/>*/}
            </Row>
            <Row>
                <GameLog></GameLog>
            </Row>
            <Row>
                <Col>
                    <Button variant="outlined" onClick={endGame}>Afslut Spil</Button>
                </Col>
            </Row>
        </Col>)
    }  else if (game.state === 3) {
        currentScreen =(
            <Podium players={game.users}></Podium>
        )
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