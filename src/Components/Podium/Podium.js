import {Container, Row, Col} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import './styles.css'
import {castlesGameState, updateElement} from '../../recoil/castlesGameState.js'
import {Button} from '@material-ui/core' 
import {useEffect} from 'react'

export default function Podium (props) {

    const [game, setGame] = useRecoilState(castlesGameState);

    useEffect(() => {
        console.log("kører Podium én gang")
        let players = props.players;
        console.log(players)

    }, [])

   
    
    return(
        <Col><h1>Div</h1></Col>
    )
}