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
import {logState, addMessage, updateTime} from '../../recoil/logState.js'



export default function CastlesTracker (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [display, setDisplay] = useRecoilState(numberpadState)
    const [numberpadSubtract] = useRecoilState(numberpadSubtractState)
    const [log, setLog] = useRecoilState(logState)

    useEffect(() => {
        //setGame({users: [...game.users], state : 1})
        //setLog({messages: addMessage(`Game has started`, log.messages)})
        setGame({users: [{id:1, playerName: "Simon", points:10}, {id:2, playerName: "Sune", points:10}], state : 2})
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
        ]})
        
        const updateInterval = setInterval(() => {
            setLog(prev => {
                return {messages: updateTime(prev.messages)}
            })
        } ,10000)
        return () => clearInterval(updateInterval);
    }, [])

    let playerClicked = (id) => {
        let users = [...game.users];
        let player = {...users[id - 1]}
        player.points = numberpadSubtract.subtract ? Number(player.points) - Number(display.display) : Number(player.points) + Number(display.display);
        setLog({messages : addMessage(`${player.playerName} ${numberpadSubtract.subtract ? "mistede": "fik"} ${display.display} point`, log.messages)});
        users[id-1] = player;
        setDisplay({display: 0})
        setGame({state: game.state, users : users});
        
    }

    let currentScreen;
    if (game.state === 1){
        currentScreen = <Col id="nameInput1"><PlayerNamesInit numberOfPlayers={3} maxNumberOfPlayers={6}/></Col>
    } else if (game.state ===2) {
        currentScreen = <Row><Col><SelectablePlayer playerSelected={playerClicked}/><Numberpad/></Col>
        <Col><GameLog></GameLog></Col></Row>
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