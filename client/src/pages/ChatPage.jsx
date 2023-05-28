import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { ChatState } from "../context/ChatProvider";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";

import Navbar from "../components/Navbar";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <Navbar />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  )
}

export default ChatPage