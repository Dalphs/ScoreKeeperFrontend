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
import {useEffect} from 'react'
import GameLog from '../GameLog/GameLog.js'
import {logState, addMessage, updateTime} from '../../recoil/logState.js'
import {scoreInputState} from '../../recoil/scoreInputState.js'



export default function CastlesTracker (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [display, setDisplay] = useRecoilState(numberpadState)
    const [numberpadSubtract] = useRecoilState(numberpadSubtractState)
    const [log, setLog] = useRecoilState(logState)
    const [scoreInput, setScoreInput] = useRecoilState(scoreInputState)

    useEffect(() => {
        //setGame({users: [...game.users], state : 1})
        //setLog({messages: addMessage(`Game has started`, log.messages)})
        setGame({users: [{id:1, playerName: "Simon", points:25}, {id:2, playerName: "Sune", points:10}, {id:3, playerName: "Søren", points:25}, {id:4, playerName: "Kira", points:10}], state : 2})
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

    let getPoints = () => {
        let initial = scoreInput.display
        let operatorLocations = [];
        for (let i = 0; i < initial.length; i++) {
            console.log(`første for ${}`)
            let char = initial.charAt(i)
            if (!Number.isInteger(char)) {
                if (char === '+' || char === '-') {
                    operatorLocations.push(i)
                    console.log(`første for tilføjer operator fra plads ${i}`)
                } else {
                    return null
                }
            }
        }
        console.log(``)
        let result = 0;
        console.log(`operatorlocations efter for ${operatorLocations}`)
        if (operatorLocations[0] !== 0){
            result += initial.subStr(0, operatorLocations[0])
            console.log(`første index var ikke en operator så resuelt er nu ${result}`)
        }
        if (operatorLocations[operatorLocations.length - 1]) {
            operatorLocations.splice(operatorLocations.length - 1, 1)
            console.log(`sidste index var ne operator så den slettes og det nye operatorlocations ser sådan ud ${operatorLocations}`)
        }
        for (let i = 0; i < operatorLocations.length; i++) {
            if (i + 1 < operatorLocations.length) {
//Lav metoder der plusser og minusser
            } else  {
                
            }
            
        }
    }

    let playerClicked = (id) => {
        let users = [...game.users];
        let player = {...users[id - 1]}
        player.points = getPoints();
        setLog({messages : addMessage(`${player.playerName} ${numberpadSubtract.subtract ? "mistede": "fik"} ${display.display} point`, log.messages)});
        users[id-1] = player;
        setDisplay({display: 0})
        setGame({state: game.state, users : users});
        
    }

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
                <SelectablePlayer playerSelected={playerClicked}/>
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
            <Col>
                <Podium players={game.users}></Podium>
            </Col>
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