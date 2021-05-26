import {atom} from 'recoil';

export const pirateWhistState = atom({
    key: "pirateWhistState",
    default:{players:[], 
        games:[{ 
            rounds: [
                {type: "Minus stik", players: [
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    }
                ]}, 
                {type: "Minus klør", players: [
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    }
                ]}, 
                {type: "Minus damer", players: [
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    }
                ]},
                {type: "Klør konge", players: [
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    }
                ]},
                {type: "Kabale", players: [
                    {
                        id : null,
                        name: null,
                        pointsBeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsbeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsbeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    },
                    {
                        id : null,
                        name: null,
                        pointsbeforeEvent: 0,
                        event: {points : 0, pointGivingEvents:0} 
                    }
                ]}
            ]}]} //{players[String], games[]} - game: {rounds[points]}
})

export const getDemoState = () => {
    return(
        {players:[{id: 1, name:"Simon"}, {id: 2, name:"Sune"}, {id: 3, name:"Søren"}, {id: 4, name:"Kira"}], 
            games:[{ 
                id:1, rounds: [
                    {type: "Minus stik", id:1 ,players: [
                        {
                            id : 1,
                            name: "Simon",
                            pointsBeforeEvent: 0,
                            event: {points : 0.5, pointGivingEvents:2} 
                        },
                        {
                            id : 2,
                            name: "Sune",
                            pointsBeforeEvent: 0,
                            event: {points : 0.5, pointGivingEvents:2} 
                        },
                        {
                            id : 3,
                            name: "Søren",
                            pointsBeforeEvent: 0,
                            event: {points : 1, pointGivingEvents:4} 
                        },
                        {
                            id : 4,
                            name: "Kira",
                            pointsBeforeEvent: 0,
                            event: {points : 1.25, pointGivingEvents:5} 
                        }
                    ]}, 
                    {type: "Minus klør", id:2, players: [
                        {
                            id : 1,
                            name: "Simon",
                            pointsBeforeEvent: 0.5,
                            event: {points : 0.5, pointGivingEvents:2} 
                        },
                        {
                            id : 2,
                            name: "Sune",
                            pointsBeforeEvent: 0.5,
                            event: {points : 0.5, pointGivingEvents:2} 
                        },
                        {
                            id : 3,
                            name: "Søren",
                            pointsBeforeEvent: 1,
                            event: {points : 1, pointGivingEvents:4} 
                        },
                        {
                            id : 4,
                            name: "Kira",
                            pointsBeforeEvent: 1.25,
                            event: {points : 1.25, pointGivingEvents:5} 
                        }
                    ]}, 
                    {type: "Minus damer", id:3, players: [
                        {
                            id : 1,
                            name: "Simon",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 2,
                            name: "Sune",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 3,
                            name: "Søren",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 4,
                            name: "Kira",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        }
                    ]},
                    {type: "Klør konge", id: 4, players: [
                        {
                            id : 1,
                            name: "Simon",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 2,
                            name: "Sune",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 3,
                            name: "Søren",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 4,
                            name: "Kira",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        }
                    ]},
                    {type: "Kabale", id:5, players: [
                        {
                            id : 1,
                            name: "Simon",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 2,
                            name: "Sune",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 3,
                            name: "Søren",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        },
                        {
                            id : 4,
                            name: "Kira",
                            pointsBeforeEvent: 0,
                            event: {points : 0, pointGivingEvents:0} 
                        }
                    ]}
                ]}]}
    )
}