import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

export const initUserState = {
    username: "Rojet Savage",
    password: "****"
}

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(initUserState)

    const Logout = () => {
        setUser(initUserState);
    }

    const Login = (user) => {
        setUser(user);
    }

    const isLoggedIn = true;
    

    return (
        <UserContext.Provider value={{
            user, 
            Logout,
            Login,
            isLoggedIn
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}

