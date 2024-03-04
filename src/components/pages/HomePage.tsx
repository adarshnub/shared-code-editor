"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button';
import { uuid } from 'uuidv4';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const HomePage = () => {

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('')

    const router = useRouter()

    function handleJoinRoom(e:any) {
        e.preventDefault();
        if( !roomId || !username) {
            toast.error("Room id and username are required");
            return;
        }
        router.push(`/editor/${roomId}`);
    }

    function handleCreateNewRoom(e:any) {
        e.preventDefault();
        const id = uuid()
        console.log("ID",id)
        setRoomId(id);
        toast.success("created a New Room")
    }
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

            <Button onClick={handleCreateNewRoom}>create new room</Button>
        </div>
    </div>
  )
}

export default HomePage;