import {useRecoilState} from 'recoil';
import './styles.css'
import {logState, updateLog} from '../../../recoil/logState.js'

export default function Input (props) {

    const [log, setLog, addMessage, updateTime] = useRecoilState(castlesGameState);


    return(
        <div id="logContainer">
            <tbody>
                {log.map(message => {
                    return ( 
                        <tr>
                            <td>{message.timeText}</td>
                            <td>{message.text}</td>
                        </tr>
                    )
                })}
            </tbody>
        </div>
    )
}