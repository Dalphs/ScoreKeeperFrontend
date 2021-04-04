import {atom} from 'recoil';

export const numberpadState = atom({
    key: "numberState",
    default:{display: "0"}
})

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