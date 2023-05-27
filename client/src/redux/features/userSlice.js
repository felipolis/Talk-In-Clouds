import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        selectedChat: null,
        notifications: [],
        chats: [],
    },
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                localStorage.removeItem("actkn");
            } else {
                localStorage.setItem("actkn", action.payload.token);
            }

            state.user = action.payload;
        },

        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
        },

        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },

        setChats: (state, action) => {
            state.chats = action.payload;
        }
    },
});