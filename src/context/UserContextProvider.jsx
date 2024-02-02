//react
import { useState } from "react";

//context
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [ username, setUsername ] = useState(null);

    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;