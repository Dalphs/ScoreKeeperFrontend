import TextField from '@material-ui/core/TextField';
import {useRef} from "react";
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '../../../recoil/castlesGameState.js'

export default function Input (props) {

    const [game, setGame] = useRecoilState(castlesGameState);

    const myField = useRef(null)
    console.log(game)
    var onChange = (e) =>{
        let user = {id: props.id, playerName : e.target.value}
        setGame({users: updateElement(game.users, user)})
    }

    return(
        <TextField id="standard-basic" label={props.text} onFocus={() => props.onFocus(props.id)} onChange={onChange}/>
        
    )
}