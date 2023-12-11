import { Outlet } from "react-router-dom";
import { LoginContextProvider } from "../../../hooks/LoginContext";

export function LoginProviderLayout() {
    return (
        <LoginContextProvider>
            <Outlet />
        </LoginContextProvider>
    )
}