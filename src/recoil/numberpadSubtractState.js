import {atom} from 'recoil';

export const numberpadSubtractState = atom({
    key: "numberSubtractState",
    default:{subtract: false}
})