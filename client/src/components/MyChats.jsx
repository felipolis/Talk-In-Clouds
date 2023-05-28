import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender, getSenderPic } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./GroupChatModal";
import { Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../context/ChatProvider";
import chatApi from "../api/modules/chat.api"

const MyChats = ({ fetchAgain }) => {

  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

	const fetchChats = async () => {
		const { response, error } = await chatApi.fetchChats();

		if (response) {
			setChats(response);
		}

		if (error) {
			toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
		}
	}

	useEffect(() => {
		setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);



  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      bg="white"
      w={{ base: "100%", md: "31%" }}
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
				bg="#E2EEF7"
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
            colorScheme="red"
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        bg="#EBF4FB"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat 
                  ? "linear-gradient(90deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0) 100%)" 
                  : "EBF4FB"}
                color={selectedChat === chat ? "black" : "black"}
                px={3}
                py={6}
                key={chat._id}
								display="flex"
								alignItems="center"
                style={{
                  borderLeft: selectedChat === chat ? "4px solid #FD4F4F" : "none",
                }}
              >
								<Avatar
                  size="lg"
                  cursor="pointer"
                  name={!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
									src={`${!chat.isGroupChat ? getSenderPic(loggedUser, chat.users) : chat.chatName}`}
                />
								<Box
									ml={3}
									display="flex"
									flexDir="column"
									justifyContent="center"
									alignItems="flex-start"
								>
									<Text
										overflow="hidden"
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										maxW={{ base: "100px", md: "150px", lg: "200px", xl: "250px" }}
									>
										{!chat.isGroupChat
											? getSender(loggedUser, chat.users)
											: chat.chatName}
									</Text>
									{chat.latestMessage && (
										<Text fontSize="xs">
											{chat.latestMessage.content.length > 50
												? chat.latestMessage.content.substring(0, 51) + "..."
												: chat.latestMessage.content}
										</Text>
									)}
								</Box>

              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
}

export default MyChats