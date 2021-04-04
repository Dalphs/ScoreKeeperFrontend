import {Row, Col, Container} from 'react-bootstrap'
import SelectablePlayer from '../SelectablePlayer/SelectablePlayer'
import PlayerNamesInit from '../PlayerNamesInit/PlayerNamesInit.js'
import './styles.css'
import Numberpad from '../Numberpad/Numberpad.js'
import {useRecoilState} from 'recoil'
import {castlesGameState} from '../../recoil/castlesGameState.js'
import {numberpadState} from '../../recoil/numberpadState'
import {useEffect} from 'react'


export default function CastlesTracker (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [display, setDisplay] = useRecoilState(numberpadState)

    useEffect(() => {
        setGame({users: [...game.users], state : 1})
    }, [])

    let playerClicked = (id) => {
        console.log(id)
        let users = [...game.users];
        console.log(display)
        let player = {...users[id - 1]}
        player.points = Number(player.points) + Number(display.display);
        users[id-1] = player;
        setDisplay({display: 0})
        setGame({state: game.state, users : users});
        
    }

    return (
        <Container>
            <Row>
                <Col id="nameInput1">
                    {game.state === 1 ?
                        <Col id="nameInput1"><PlayerNamesInit numberOfPlayers={4} maxNumberOfPlayers={6}/></Col> :
                        <Col><SelectablePlayer playerSelected={playerClicked}/><Numberpad/></Col>
                    }
                </Col>
            </Row>
        </Container>
    )
}