"use client";

import Landingpage from "@/components/shared/Landingpage";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";

const ENDPOINT = "http://localhost:3001";

export interface Language {
  id: string;
  name: string;
}

const Test = () => {
  const [input, setInput] = useState("");
  const [allInput, setAllInput] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = socketIOClient(ENDPOINT);
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("codeChange", (data: string) => {
        setInput(data);
      });
    }

    return () => {
      if (socket) {
        socket.off("codeChange");
      }
    };
  }, [socket]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    if (socket) {
      socket.emit("codeChange", newInput);
    }
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Landingpage /> */}
        <div>
          <textarea
            // type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
        </div>
      </main>
    </div>
  );
};

export default Test;
