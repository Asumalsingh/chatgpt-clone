import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatBox({ chats, loading }) {
  const scroll = useRef(null);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="mb-16">
      {chats.map((message, index) => {
        return (
          <div key={index} ref={scroll}>
            {message.role === "user" ? (
              <div className="px-4 mb-8">
                <div className="max-w-screen-md mx-auto flex space-x-6 ">
                  <div className="bg-blue-400 p-1 rounded-sm text-gray-200">
                    You
                  </div>
                  <p className="text-white ">{message.content}</p>
                </div>
              </div>
            ) : (
              <div className="px-4 bg-[#444654] mb-8">
                <div className="max-w-screen-md mx-auto flex items-start space-x-6 py-5">
                  <Image
                    src="/images/chatgpt-icon.png"
                    alt="My Image"
                    width={34}
                    height={34}
                  />
                  <div>
                    {message.content.map((text, idx) => {
                      return (
                        <p key={idx} className="text-[#d1d5db]">
                          {text}&nbsp;
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {loading && (
        <div className="px-4 bg-[#444654] mb-8">
          <div className="max-w-screen-md mx-auto flex items-start space-x-6 py-5">
            <Image
              src="/images/chatgpt-icon.png"
              alt="My Image"
              width={34}
              height={34}
            />
            <p className="text-[#d1d5db] animate-pulse">
              Getting your answer . . .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
