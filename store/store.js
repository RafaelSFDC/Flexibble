import { proxy } from "valtio";

const state = proxy({
    logged: true,
    loading: {
        start: true,
        chats: true
    },
    userId: "",
    userCollection: "",
    chats: [],
    user: {
        image: ""
    },
    activeChat: null,
    users: [],
    activeUser: null,
    activeUserInfo: null,
    activeUserId: null,
    chatCrated: false
});


export default state;
