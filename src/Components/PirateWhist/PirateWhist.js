import { Row, Col, Container, Button } from 'react-bootstrap'
import SelectablePlayer from '@castles/SelectablePlayer/SelectablePlayer.js'
import PlayerNamesInit from '@shared/PlayerNamesInit/PlayerNamesInit.js'
import './styles.css'
import Podium from '@shared/Podium/Podium.js'
import { useRecoilState } from 'recoil'
import { castlesGameState } from '@recoil/castlesGameState.js'
import { useEffect, useRef } from 'react'
import GameLog from '@shared/GameLog/GameLog.js'
import { logState, addMessage, updateTime, initialMessage } from '@recoil/logState.js'



export default function Castles(props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [log, setLog] = useRecoilState(logState)

    useEffect(() => {
        setGame({ users: [...game.users], state: 1 })
        setLog({ messages: initialMessage() })

        //Updates times in gamelog every 10 seconds. To avoid looping prev is used to get the last times vs. the current"
        const updateInterval = setInterval(() => {
            setLog(prev => {
                return { messages: updateTime(prev.messages) }
            })
        }, 10000)
        return () => clearInterval(updateInterval);
    }, [])

    let endGame = () => {
        setGame({ users: game.users, state: 3 })
    }

    const startNewGame = () => {
        setGame({ users: [...game.users], state: 1 })
        setLog({ messages: addMessage(`Game has started`, []) })
    }

    let currentScreen;
    //current screen is set according to state in castlesGameState. 1 = input playernames 2= assign points 3= final scores
    if (game.state === 1) {
        currentScreen = <Col id="nameInput1"><PlayerNamesInit numberOfPlayers={3} maxNumberOfPlayers={6} /></Col>
    } else if (game.state === 2) {
        currentScreen = (
            <Col>
                <Row>
                    <SelectablePlayer />
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
    } else if (game.state === 3) {
        currentScreen = (
            <Container>
                <Row>
                    <Podium players={game.users}></Podium>
                </Row>
                <Row>
                    <Col><Button variant="outlined" onClick={startNewGame}>Start nyt</Button></Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <Col id="nameInput1">
                    <h1>VIRKER</h1>
                </Col>
            </Row>
        </Container>
    )
}