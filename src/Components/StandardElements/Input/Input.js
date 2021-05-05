import TextField from '@material-ui/core/TextField';
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '@recoil/castlesGameState.js'

export default function Input (props) {

    const [game, setGame] = useRecoilState(castlesGameState);

    var onChange = (e) =>{
        let user = {id: props.id, playerName : e.target.value, points : 0}
        setGame({users: updateElement(game.users, user), state:game.state})
    }

    return(
        <TextField id="standard-basic" label={props.text} onFocus={() => props.onFocus(props.id)} onChange={onChange}/>
    )
}