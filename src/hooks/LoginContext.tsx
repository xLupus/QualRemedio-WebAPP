import { ReactNode, createContext, useState } from "react";
import { LoginContextType } from "../types/type";
import Cookies from 'js-cookie';

export const LoginContext = createContext<LoginContextType>({
    currentAccountType: '',
    setCurrentAccountType: () => {}
});

export function LoginContextProvider({ children }: { children: ReactNode }) {
    const [currentAccountType, setCurrentAccountType] = useState<string>('');

    if(currentAccountType) Cookies.set('account_type_selected', currentAccountType, { expires: 1 });

    return (
        <LoginContext.Provider value={{currentAccountType, setCurrentAccountType}}>
            {children}
        </LoginContext.Provider>
    )
}