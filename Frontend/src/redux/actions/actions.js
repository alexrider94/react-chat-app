import * as type from '../constants/actionTypes';

export const sendChat = () => {
    return{
        type: type.SEND_CHAT
    }
}

export const receiveChat = (data) => {
    return{
        type: type.RECEIVE_CHAT,
        data
    }
}

export const clearChat = () => {
    return {
        type: type.CLEAR_CHAT,
    }
}

export const mySocketId = (socketId) => {
    return{
        type: type.MY_SOCKET_ID,
        socketId
    }
}