import {Row, Col, Container} from 'react-bootstrap'
import './styles.css'
import Input from '../StandardElements/Input/Input.js'
import {useRecoilState} from 'recoil'
import {inputState, addInput, updateElement} from '../../recoil/inputState.js'
import { useEffect } from 'react'


export default function PlayerNamesInit (props) {
    const [inputs, setInputs] = useRecoilState(inputState)

    var onInputChange = (inputId, inputText) => {
        setInputs(updateElement(inputs, {id: 1, playername: inputText}))
    }

    var onInputFocus = (inputId) => {
        if(inputId === inputs.length && inputId < props.maxNumberOfPlayers){
            console.log(addInput(inputs, inputId))
            setInputs(addInput(inputs, inputId + 1))
        }
    }

    var numberOfInputs = props.numberOfPlayers === null ? 2 : props.numberOfPlayers;
    var tempInputs = [];
    for (let i = 0; i < numberOfInputs; i++){
        tempInputs.push({id: i+1})
        console.log("korer")
    }

    useEffect(() => {
        setInputs(tempInputs)
    }, [])
    
   

    return (
        <Container className="container">
            {inputs.map((input, i) => {
                return <Row key={input.id}><Col><Input id={input.id} onFocus={onInputFocus} onChange={onInputChange} text={`Spiller ${input.id}`}></Input></Col></Row>
            })}
            {/*tempInputs*/}
        </Container>
    )
}