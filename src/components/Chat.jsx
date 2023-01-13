import React, { useContext } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <ChatInput />
    </div>
  );
}

export default Chat;
