import {io}  from "socket.io-client"

export const initSocket = async () => {
    const options = {
        'force new connection' : true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transport : ['websocket']
    }

    return io('http://localhost:3001',options);
}