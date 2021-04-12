import {useRecoilState} from 'recoil';
import './styles.css'
import {logState, updateLog} from '../../recoil/logState.js'

export default function GameLog (props) {

    const [log, setLog, addMessage, updateTime] = useRecoilState(logState);


    return(
        <div id="logContainer">
            <tbody>
                {console.log(log)}
                {log.messages.map(message => {
                    return ( 
                        <tr>
                            <td>{message.timeString}</td>
                            <td>{message.text}</td>
                        </tr>
                    )
                })}
            </tbody>
        </div>
    )
}