
// test JSON {round:"Uden Stik",
// players: [
// {playerName : "Søren", numberOfNegativeEvents : 4, currentPoints: 1.25},
// {playerName : "Mor", numberOfNegativeEvents : 1, currentPoints: 1},
// {playerName : "Far", numberOfNegativeEvents : 2, currentPoints: 0},
// {playerName : "Simon", numberOfNegativeEvents : 6, currentPoints: 1}
// ]}

function getScore (round) {//{round:"uden stik", players: [player1, 2, 3, 4] => player{numberOfnegativeEvents: 4 OR placement, name, currentPoints}}
    let newRound = {...round}
    let multiplier
    let finalRound = false
    switch (round.round){
        case "Minus stik": 
        case "Minus klør":
            multiplier = 0.25
            break;
        case "Minus damer":
            multiplier = 1
            break;
        case "Klør konge":
            multiplier = 1.5
            break;
        case "Kabale":
            finalRound = true

    }
    if (finalRound) {
        newRound.players = getFinalRound(round.players)
    } else {
        newRound.players = getPoints(round.players, multiplier)
    } 
    return newRound
}

function getFinalRound(players) {
    players.forEach(player => {
        let placementPoints
        switch (Number(player.placement)){
            case 1:
                placementPoints = 6.5
            case 2:
                placementPoints = 4
            case 3:
                placementPoints = 2
            case 4:
                placementPoints = 1
        }
        player.currentPoints -= placementPoints;
        player.currentPoints = player.currentPoints * -1
        console.log(`current placementpoints = ${placementPoints}`)
    });
    return players;
}

function getPoints (players, multiplier) {
    //Iterating over players and updating currentpoints using negativeNumberOfEvents to determine score
    players.forEach(player => {
        let pointsToAdd = Number(player.numberOfNegativeEvents) * multiplier;
        console.log(pointsToAdd + " and " + multiplier)
        player.currentPoints += pointsToAdd;
    });
    return players
}

