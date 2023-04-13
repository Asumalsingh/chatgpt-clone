import React, { useState } from "react";
import axios from "axios";

export default function ChatInput({ chats, setChats, setLoading }) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [input, setInput] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const [warning, setWarning] = useState(false);

  const handelSend = () => {
    setWarning(false);

    if (!input) {
      alert("Please write message");
      return;
    }
    setHideButton(true);
    setChats([...chats, { role: "user", content: input }]);
    setLoading(true);
    const temp = input;
    setInput("");
    axios
      .post(`${host}/chat`, { input: temp })
      .then((response) => {
        // console.log(response.data);
        const content = response.data[0].message.content.split("\n");
        setLoading(false);
        setChats((prevChats) => [
          ...prevChats,
          { role: response.data[0].message.role, content },
        ]);
      })
      .catch((error) => {
        error.response && console.log(error.response.data);
        setWarning(true);
      })
      .finally(() => {
        setHideButton(false);
      });
  };

  return (
    <section className="max-w-screen-md mx-auto px-4 fixed bottom-8 w-full left-0 right-0 ">
      <p
        className={`${
          warning ? "block" : "hidden"
        } p-3 mb-2 border rounded-lg border-red-500 text-red-500`}
      >
        Please refresh page and try again
      </p>
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Send a message. . . "
          value={input}
          className="w-full rounded-md bg-[#40414f] p-3 border-none focus:border-none outline-none text-white"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className={`${
            hideButton ? "hidden" : "block"
          } y-3 px-5 bg-blue-500 rounded-lg text-white font-semibold hover:bg-transparent border-2 border-blue-500  hover:border-blue-500`}
          onClick={handelSend}
        >
          Send
        </button>
      </div>
    </section>
  );
}
