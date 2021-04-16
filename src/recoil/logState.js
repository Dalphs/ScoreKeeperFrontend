import {atom} from 'recoil';

export const logState = atom({
    key: "logState",
    default:{messages:[]} //{timestamp, timestring, text}
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
        if(minutes !== 0 && hours)
            timeString += `${minutes}m `;
    }
    timeString += `${seconds % 60}s siden`
    return timeString
}

export const addMessage = (message, messages) => {
    let newMessages = [...messages]
    let currentTime = Math.floor(Date.now() / 1000)
    newMessages.push({timestamp: currentTime, timeString: "Ny", text: message})
    return newMessages
}

export const updateTime = (messages) =>{
    console.log(messages)
    let unixSeconds = Math.floor(Date.now() / 1000)
    let oldMessages = [...messages]
    let newMessages = []
    oldMessages.forEach((message) => {
        let temp = {...message}
        let difference = unixSeconds - temp.timestamp
        temp.timeString = convertSeconds(difference)
        console.log(temp);
        newMessages.push(temp)
    })
    console.log(newMessages)
    return newMessages;
}


