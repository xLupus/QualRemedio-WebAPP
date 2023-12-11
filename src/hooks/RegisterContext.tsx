import { ReactNode, createContext, useState } from "react";
import { RegisterContextType, RegisterType } from "../types/type";
import Cookies from 'js-cookie';

export const RegisterContext = createContext<RegisterContextType>({
    registerUserCredentials: [],
    setRegisterUserCredentials: () => {}
});

export function RegisterContextProvider({ children }: { children: ReactNode }) {
    const [registerUserCredentials, setRegisterUserCredentials] = useState<RegisterType[]>([]);

    if(registerUserCredentials.length > 0) {
        registerUserCredentials.map(el => {
            Cookies.set(`${el.name}`, el.value, { expires: 2 })
        });
    }
    
    return (
        <RegisterContext.Provider value={{registerUserCredentials, setRegisterUserCredentials}}>
            {children}
        </RegisterContext.Provider>
    )
}