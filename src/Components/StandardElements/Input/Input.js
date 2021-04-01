import TextField from '@material-ui/core/TextField';
import {useRef} from "react";
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '../../../recoil/castlesGameState.js'

export default function Input (props) {

    const [game, setGame] = useRecoilState(castlesGameState);

    const myField = useRef(null)
    var onChange = (e) =>{
        let user = {id: props.id, playerName : e.target.value}
        console.log(`Logging new User : ${updateElement(game.users, user)} `)
        setGame({users: updateElement(game.users, user)})
        console.log(`Logging e : ${e.target.value} and logging id ${props.id}`)
        setTimeout(()=>{console.log(game)}, 2000)
        
        /*let userArray = [...game.users]
        let userExists = userArray.some((obj) =>{
            if (obj.id === props.id){
                obj.playerName = e.target;
                setGame({users: userArray})
                return true;
            } 
        })
        if(!userExists){
            let user = {id: props.id, playerName: e.target.value};
            setGame({users: [...userArray, user]})
        }
        console.log(game)*/
    }

    return(
        <TextField id="standard-basic" label={props.text} onChange={onChange}/>
        
    )
}