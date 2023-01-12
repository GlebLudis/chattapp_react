import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function ChatInput() {
  return (
    <div className="input">
      <input type="text" placeholder="type something" />
      <div className="send">
        <div className="sendButton">
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        <div className="attachButton">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <AttachFileIcon />
          </IconButton>
        </div>
        <div className="attachPhoto">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
