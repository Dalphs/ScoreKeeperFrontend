import {atom} from 'recoil';

export const pirateWhistState = atom({
    key: "pirateWhistState",
    default:{players:[], games:[]} //{players[String], games[]} - game: {rounds[points]}
})