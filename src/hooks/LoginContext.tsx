import { ReactNode, createContext, useState } from "react";
import { LoginContextType } from "../types/type";
import Cookies from 'js-cookie';

export const LoginContext = createContext<LoginContextType>({
    accountType: '',
    setAccountType: () => {}
});

export function LoginContextProvider({ children }: { children: ReactNode }) {
    const [accountType, setAccountType] = useState<string>('');

    accountType ? Cookies.set('account_type_selected', accountType, { expires: 1 }) : setAccountType(Cookies.get('account_type_selected') || ' ');

    return (
        <LoginContext.Provider value={{accountType, setAccountType}}>
            {children}
        </LoginContext.Provider>
    )
}