import {atom} from 'recoil';

export const pirateWhistState = atom({
    key: "pirateWhistState",
    default:{players:[], 
        games:[{ 
            rounds: [
                {type: "Minus stik", players: new Array(4)}, 
                {type: "Minus klør", players: new Array(4)}, 
                {type: "Minus damer", players: new Array(4)},
                {type: "Klør konge", players: new Array(4)},
                {type: "Kabale", players: new Array(4)}
            ]}]} //{players[String], games[]} - game: {rounds[points]}
})