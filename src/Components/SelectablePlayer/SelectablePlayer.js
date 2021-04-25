import {Row, Col, Container} from 'react-bootstrap'
import {useRef, useEffect} from 'react'
import './styles.css'
import {useRecoilState} from 'recoil'
import {castlesGameState} from '../../recoil/castlesGameState.js'
import {scoreInputState} from '../../recoil/scoreInputState.js'
import {logState, addMessage} from '../../recoil/logState.js'


export default function SelectablePlayer (props) {
    const [game, setGame] = useRecoilState(castlesGameState)
    const [scoreInput, setScoreInput] = useRecoilState(scoreInputState)
    const [log, setLog] = useRecoilState(logState)
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    var onChange = (e) =>{
        setScoreInput({display: e.target.value})
        console.log(`new input ${e.target.value}`)
    }

    let getPoints = () => {
        let initial = scoreInput.display
        let operatorLocations = [];
        console.log(`Hvad er længden? ${initial.length}`)
        for (let i = 0; i < initial.length; i++) {
            let char = initial.charAt(i)
            console.log(`første for ${char}`)
            if (!Number.isInteger(char)) {
                if (char === '+' || char === '-') {
                    operatorLocations.push(i)
                    console.log(`første for tilføjer operator fra plads ${i}`)
                } else {
                    
                }
            }
        }
        console.log(``)
        let result = 0;
        console.log(`operatorlocations efter for ${operatorLocations}`)
        if (operatorLocations[0] !== 0){
            result += Number(initial.substring(0, operatorLocations[0]))
            console.log(`første index var ikke en operator så resuelt er nu ${result}`)
        }
        if (!Number.isInteger(operatorLocations[operatorLocations.length - 1])) {
            operatorLocations.splice(operatorLocations.length - 1, 1)
            console.log(`sidste index var ne operator så den slettes og det nye operatorlocations ser sådan ud ${operatorLocations}`)
        }
        for (let i = 0; i < operatorLocations.length; i++) {
            let currentNumber;
            if (i + 1 === operatorLocations.length) {
                currentNumber = initial.substring(operatorLocations[i] + 1, initial.length)
                console.log("kører på sidste operator")
            } else  {
                currentNumber = initial.substring(operatorLocations[i] + 1, operatorLocations[i + 1])
                console.log("kører på første operator")
            }
            switch (initial.charAt(operatorLocations[i])){
              case "+":
                result += Number(currentNumber)
                break;
              case "-":
                result -= Number(currentNumber)
                break;
              default:
                console.log("default")

            }
            console.log(`Currentnumber blev sat til ${currentNumber} og result er indtil videre ${result}`)
            
        }
        return result
    }

    let playerSelected = (id) => {
        let users = [...game.users];
        let player = {...users[id - 1]}
        let pointsAwarded = getPoints(); 
        player.points = player.points + pointsAwarded < 0 ? 0 : player.points + pointsAwarded
        setLog({messages : addMessage(`${player.playerName} ${pointsAwarded < 0 ? `mistede ${pointsAwarded * -1}`: `fik ${pointsAwarded}`} point`, log.messages)});
        users[id-1] = player;
        setScoreInput({display: ""})
        setGame({state: game.state, users : users});
        inputRef.current.focus()
    }

    return (
        <Container className="container" key={props.id}>
            <Row>
                {game.users.map((player) => {
                    return(
                        <Col>
                            <div className="player" onClick={ () => {playerSelected(player.id)}}>
                                <h1>{player.playerName}</h1>
                                <h1>{player.points}</h1>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <Row><Col>
                <input ref={inputRef} id="scoreInput" type="number" onChange={onChange} value={scoreInput.display}></input>
            </Col></Row>
        </Container>
    )
}