import React, { useState } from "react";
import ImageInput from "../src/components/ImageInput";
import ImageBox from "../src/components/ImageBox";

export default function ImageCreation() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="py-16">
      {chats && chats.length !== 0 ? (
        <ImageBox chats={chats} loading={loading} />
      ) : (
        <div className="h-screen pb-48 flex justify-center items-center">
          <h2 className="text-gray-200 font-bold text-5xl">Text to Image</h2>
        </div>
      )}
      <ImageInput setChats={setChats} chats={chats} setLoading={setLoading} />
    </div>
  );
}
