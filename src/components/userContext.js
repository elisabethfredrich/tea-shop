import { createContext } from "react";

export const UserContext = createContext({
    userId:undefined,
    setUserId: (id) => {},
    userName:undefined,
    setUserName: (name) => {}
});