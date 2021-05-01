import {atom} from 'recoil';

export const currentScreenState = atom({
    key: "currentGameState",
    default:{screen: "Dashboard"}
})