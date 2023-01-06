import {createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidV4 } from "uuid"

const UserContext = createContext();

export function useUser(){
    return useContext(UserContext)
}
export function UserProvider({children}){
    const [user, setUser] = useLocalStorage('user', [{}] );

    function createUser({name}){
        setUser({ id: uuidV4(), name});
    }


    return <UserContext.Provider value={{user, createUser}}>{children}</UserContext.Provider>
}
