import {atom} from 'recoil';

export const logState = atom({
    key: "logState",
    default:{messages:[]}
})

const convertSeconds = (seconds) =>{
    let timeString = "";
    let hours = false;
    if(seconds / 3600 >= 1){
        hours = true;
        timeString += `${Math.floor(seconds/3600)}t `;
    }
    if(seconds / 60 >= 1) {
        let minutes = Math.floor(seconds / 60) % 60
        if(minutes != 0 && hours)
            timeString += `${minutes}m `;
    }
    timeString += `${seconds % 60}s siden`
}

export const addMessage = (message, messages) => {
    let newMessages = [...messages]
    let currentTime = Math.floor(Date.now() / 1000)
    newMessages.push({timestamp: currentTime, timeString: "Ny", text: message})
    console.log(newMessages)
    return newMessages
}

export const updateTime = (messages) =>{
    let unixSeconds = Math.floor(Date.now() / 1000)
    let oldMessages = [...messages]
    let newMessages = []
    oldMessages.forEach((message) => {
        let difference = unixSeconds - message.timestamp
        message.timeText = convertSeconds(difference)
        newMessages.push(message)
    })
    return newMessages
    
}


