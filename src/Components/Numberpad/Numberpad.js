import {Container, Row, Col} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '../../recoil/castlesGameState.js'
import {numberpadState} from '../../recoil/numberpadState.js'
import {numberpadSubtractState} from '../../recoil/numberpadSubtractState.js'
import {Button} from '@material-ui/core' 

export default function Numberpad (props) {

    const [game, setGame] = useRecoilState(castlesGameState);
    const [numberpadDisplay, setNumberpadDisplay] = useRecoilState(numberpadState);
    const [numberpadSubtract, setNumberpadSubtract]  =useRecoilState(numberpadSubtractState);

    const newAction = (action) =>{
        if (action >= 0 && action <= 9){
            let currentDisplay = numberpadDisplay.display;
            if (currentDisplay > 0) {
                setNumberpadDisplay({display: "" + numberpadDisplay.display + action})
            }else{
                setNumberpadDisplay({display: "" + action})
            }
        } else {
            if (action == "clear"){
                setNumberpadDisplay({display: "0"})
            } else {
                let currentString = numberpadDisplay.display;
                setNumberpadDisplay(currentString.length === 1 ? {display: "0"} : {display : numberpadDisplay.display.slice(0, -1)})
            }
        }
    }

    let subtractClicked = () => {
        console.log(numberpadSubtract.subtract)
        setNumberpadSubtract({subtract: !numberpadSubtract.subtract})
    }


    return(
        <Container className="numberPadContainer">
            <Row><Col><div><h1 id="displayNumbers">{numberpadDisplay.display}</h1></div></Col></Row>
            <Row><Col><table className="tableCenter">
                <tbody>
                    <tr>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(1)}}>1</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(2)}}>2</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(3)}}>3</Button></td>
                    </tr>
                    <tr>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(4)}}>4</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(5)}}>5</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(6)}}>6</Button></td>
                    </tr>
                    <tr>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(7)}}>7</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(8)}}>8</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(9)}}>9</Button></td>
                    </tr>
                    <tr>
                        <td><Button className='numpadButton text-button' variant="outlined" color="primary" onClick={ () =>{newAction("clear")}}>Clear</Button></td>
                        <td><Button className="numpadButton" variant="outlined" color="primary" onClick={ () =>{newAction(0)}}>0</Button></td>
                        <td><Button className="numpadButton text-button" variant="outlined" color="primary" onClick={ () =>{newAction("delete")}}>Delete</Button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button className={numberpadSubtract.subtract === true ? "numpadButton text-button active" : "numpadButton text-button"} variant="outlined" color="primary" onClick={subtractClicked}>Rediger</Button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table></Col></Row>
        </Container>
    )
}