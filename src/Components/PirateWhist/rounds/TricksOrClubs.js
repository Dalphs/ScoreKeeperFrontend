import React from 'react';

function TricksOrClubs(props) {
    return (
        <div>
            <p>Hvor mange {props.type === "Minus stik" ? "stik" : "klør"} fik hver spiller:</p>
            <div></div>
        </div>
    );
}

export default TricksOrClubs;