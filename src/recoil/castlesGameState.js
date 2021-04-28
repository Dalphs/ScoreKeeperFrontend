import {atom} from 'recoil';

export const castlesGameState = atom({
    key: "castleGameState",
    default:{users:[], state: null} //User: {id, points, playerName}
})

//updates an element with the corresponding key, and works dynamiccaly on all key value pairs
export const updateElement = (elements, element) =>{
    let newElements = [];
    let playerFound = false;
    for(let i = 0; i < elements.length; i++){
        if(elements[i].id === element.id){
            playerFound = true;
            let newElement = {...elements[i]}
            for(let keyIndex = 0; keyIndex < Object.keys(element).length; keyIndex++){
                const key = Object.keys(element)[keyIndex];
                newElement[key] = element[key]
            }
            newElements.push(newElement)
        } else {
            newElements.push(elements[i])
        }
    }
    if(!playerFound){
        newElements.push(element);
    }
    return newElements;
}