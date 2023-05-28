import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { ChatState } from "../context/ChatProvider";

import Navbar from "../components/Navbar";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <Navbar />}
    </div>
  )
}

export default ChatPage