import { Outlet } from "react-router-dom";
import { RegisterContextProvider } from "../../../hooks/RegisterContext";

export function RegisterProviderLayout() {
    return (
        <RegisterContextProvider>
            <Outlet />
        </RegisterContextProvider>
    )
}