import {Row, Col, Container} from 'react-bootstrap'
import './styles.css'
import Input from '../StandardElements/Input/Input.js'


export default function PlayerNamesInit (props) {
    var inputs = [];
    var initialInputs = props.numberOfPlayers === null ? 2 : props.numberOfPlayers;
    console.log(initialInputs)

    var onInputChange = (inputId, inputText) => {

    }

    var onInputFocus = (inputId) => {
        console.log()
        if (inputId == inputs.length && inputs.length < props.maxNumberOfPlayers)
            inputs.push(<Row key={inputs.length + 1} ><Col><Input id={inputs.length + 1} onFocus={onInputFocus} onChange={onInputChange}></Input></Col></Row>);
    }

    for (let i = 0; i < initialInputs; i++){
        inputs.push(<Row key={i + 1} ><Col><Input id={i + 1} onFocus={onInputFocus} onChange={onInputChange} text={`Spiller ${i + 1}`}></Input></Col></Row>);
    }

    return (
        <Container className="container">
            {inputs}
        </Container>
    )
}