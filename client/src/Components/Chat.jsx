import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-user-info">
          <h2>Name</h2>
          <p>last seen 03:00pm</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-sender"}`}>
          <span className="chat-name">Ganesh</span>
          <span className="chat-time"> {new Date().toDateString()} </span>
          <p className="message">Hi ra asayam</p>
        </p>
      </div>
      <div className="chat-footer">
        <EmojiEmotionsIcon />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button>
            <SendIcon />
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
