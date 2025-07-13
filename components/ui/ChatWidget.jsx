import React, { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const getRandomHex = () => Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase();

const ChatPopup = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Can I be of any assistance?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const hex = getRandomHex();
    setMessages((msgs) => [
      ...msgs,
      userMsg,
      {
        from: "bot",
        text: `Give us some time while we connect you to someone for assistance. Your token number is ${hex}`
      }
    ]);
    setInput("");
  };

  if (!open) return null;
  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 animate-fadeIn">
      <div className="flex items-center justify-between px-4 py-3 bg-indigo-600 dark:bg-purple-700 rounded-t-xl">
        <span className="text-white font-semibold">Chat Support</span>
        <button onClick={onClose} className="text-white hover:text-gray-200"><FaTimes /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 max-h-60 text-sm" style={{ minHeight: 120 }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-3 py-2 rounded-lg max-w-[80%] ${msg.from === "user" ? "bg-indigo-100 dark:bg-purple-900 text-indigo-900 dark:text-purple-200" : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex items-center border-t border-gray-200 dark:border-gray-700 px-2 py-2 bg-zinc-50 dark:bg-gray-800 rounded-b-xl">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none px-2 py-1 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" className="ml-2 text-indigo-600 dark:text-purple-400 hover:text-indigo-800 dark:hover:text-purple-200"><FaPaperPlane /></button>
      </form>
    </div>
  );
};

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      <ChatPopup open={chatOpen} onClose={() => setChatOpen(false)} />
      <button
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-indigo-600 dark:bg-purple-700 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 dark:hover:bg-purple-800 transition-colors focus:outline-none"
        onClick={() => setChatOpen(true)}
        aria-label="Open chat support"
      >
        <FaComments className="w-7 h-7" />
      </button>
    </>
  );
};

export default ChatWidget; 