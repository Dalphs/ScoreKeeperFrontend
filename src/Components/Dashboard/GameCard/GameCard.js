import {Link} from 'react-router-dom'

import './styles.css'


export default function GameCard(props) {

    return (
        <Link className="gameCard" to={`/${props.url}`} style={{backgroundImage: `url(${props.picture})`}}>
            <p className="cardTitle">{props.name}</p>
        </Link>
    )
}