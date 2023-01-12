import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Kariem</span>
      </div>
        <Messages/>
        <ChatInput/>
    </div>
  );
}

export default Chat;
