import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import io from "socket.io-client";
import Lottie from "react-lottie";


import "./styles.css";
import ProfileModal from "./ProfileModal";
import ScrollableChat from "./ScrollableChat";
import animationData from "../animations/typing.json";
import UpdateGroupChatModal from "./UpdateGroupChatModal";
import { ChatState } from "../context/ChatProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();

  const { selectedChat, setSelectedChat, user, notification, setNotification } = ChatState();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);

  const fetchMessages = async () => {}
  const sendMessage = async (event) => {}
  const typingHandler = (e) => {}


  return (
    <>
        {selectedChat ? (
            <>
                <Text
                    fontSize={{ base: "28px", md: "30px" }}
                    pb={3}
                    px={2}
                    w="100%"
                    fontFamily="Work sans"
                    display="flex"
                    justifyContent={{ base: "space-between" }}
                    alignItems="center"
                >
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        icon={<ArrowBackIcon />}
                        onClick={() => setSelectedChat("")}
                    />
                    {messages && (!selectedChat.isGroupChat ? (
                        <>
                            {getSender(user, selectedChat.users)}
                            <ProfileModal
                                user={getSenderFull(user, selectedChat.users)}
                            />
                        </>
                    ) : (
                        <>
                            {selectedChat.chatName.toUpperCase()}
                            <UpdateGroupChatModal
                                fetchMessages={fetchMessages}
                                fetchAgain={fetchAgain}
                                setFetchAgain={setFetchAgain}
                            />
                        </>
                        ))}
                </Text>
                <hr
                    style={{
                        color: "#E0E0E0",
                        backgroundColor: "#E0E0E0",
                        height: 1,
                        width: "100%",
                        border: "none",
                    }}
                />
                <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="flex-end"
                    p={3}
                    w="100%"
                    h="100%"
                    overflowY="hidden"
                >
                    {loading ? (
                        <Spinner
                            size="xl"
                            w={20}
                            h={20}
                            alignSelf="center"
                            margin="auto"
                        />
                        ) : (
                        <div className="messages">
                            <ScrollableChat messages={messages} />
                        </div>
                        )}
                    
                    <FormControl
                        onKeyDown={sendMessage}
                        id="first-name"
                        isRequired
                        mt={3}
                        >
                        {istyping ? (
                            <div>
                              <Lottie
                                options={defaultOptions}
                                // height={50}
                                width={70}
                                style={{ marginBottom: 15, marginLeft: 0 }}
                              />
                            </div>
                        ) : (
                            <></>
                        )}
                        <Input
                            variant="filled"
                            bg="#E0E0E0"
                            placeholder="Enter a message.."
                            value={newMessage}
                            onChange={typingHandler}
                        />
                    </FormControl>
                </Box>
            </>
        ) : (
            <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                <Text fontSize="3xl" pb={3} fontFamily="Work sans">
                    Click on a user to start chatting
                </Text>
            </Box>
        )}
    </>
  )
}

export default SingleChat