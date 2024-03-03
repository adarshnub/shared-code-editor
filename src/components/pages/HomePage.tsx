"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button';

const HomePage = () => {

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('')

    function handleJoinRoom() {}
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <input
                className='border-2 rounded-[8px] px-4 py-1'
                type="text"
                placeholder='room id'
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)} />

            <input 
                className='border-2 rounded-[8px] px-4 py-1'
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <Button onClick={handleJoinRoom}>Join Room</Button>
        </div>
    </div>
  )
}

export default HomePage;