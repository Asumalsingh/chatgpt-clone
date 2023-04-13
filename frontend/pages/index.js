import ChatBox from "../src/components/ChatBox";
import ChatInput from "../src/components/ChatInput";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="py-16">
        {chats && chats.length !== 0 ? (
          <ChatBox chats={chats} loading={loading} />
        ) : (
          <div className="h-screen pb-48 flex justify-center items-center">
            <h2 className="text-gray-200 font-bold text-5xl">CHAT-GPT 2.0</h2>
          </div>
        )}
        <ChatInput setChats={setChats} chats={chats} setLoading={setLoading} />
      </div>
    </>
  );
}
