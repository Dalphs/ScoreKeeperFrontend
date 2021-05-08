import {Link} from 'react-router-dom'

import './styles.css'


export default function GameCard(props) {

    return (
        <Link className="gameCard" to={`/${props.name}`} style={{backgroundImage: `url(${props.picture})`}}>
            <p className="cardTitle">{props.name}</p>
        </Link>
    )
}