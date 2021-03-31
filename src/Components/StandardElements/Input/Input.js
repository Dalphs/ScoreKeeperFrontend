import TextField from '@material-ui/core/TextField';
import {useRef} from "react";
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState} from '../../../recoil/castlesGameState.js'

export default function Input (props) {

    const [games, setGames] = useRecoilState(castlesGameState);

    const myField = useRef(null)
    var onChange = (e) =>{
        console.log(e.target.value);
    }

    return(
        <TextField id="standard-basic" label={props.text} onChange={onChange}/>
    )
}