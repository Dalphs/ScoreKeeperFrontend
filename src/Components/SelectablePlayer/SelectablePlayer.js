import {Row, Col, Container} from 'react-bootstrap'
import {useEffect} from 'react'
import './styles.css'
import {useRecoilState} from 'recoil'
import {castlesGameState} from '../../recoil/castlesGameState.js'
import {scoreInputState} from '../../recoil/scoreInputState.js'


export default function SelectablePlayer (props) {
    const [game, setgame] = useRecoilState(castlesGameState)

    return (
        <Container className="container" key={props.id}>
            <Row>
                {game.users.map((player) => {
                    return(
                        <Col>
                            <div className="player" onClick={ () => {props.playerSelected(player.id)}}>
                                <h1>{player.playerName}</h1>
                                <h1>{player.points}</h1>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

const ScoreInput = (props) => {
    const [scoreInput, setScoreInput] = useRecoilState(scoreInputState)

    var onChange = (e) =>{
        setScoreInput({display: e.target.value})
    }

    return (
        <input id="scoreInput" type="number" onChange={onChange}></input>
    )
}