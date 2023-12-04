import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
import { Login } from "./pages/AuthPages/LoginPages/Login";
import { Auth } from "./layouts/Auth";
import { LoginAccountSelection } from "./pages/AuthPages/LoginPages/AccountSelection";
import { RegisterAccountSelection } from "./pages/AuthPages/RegisterPages/AccountSelection";
import { RegisterAccountInformation } from "./pages/AuthPages/RegisterPages/AccountInformation";
import { RegisterAccountCreated } from "./pages/AuthPages/RegisterPages/AccountCreated";
import { MailVerification } from "./pages/AuthPages/MailPages/MailVerification";
import { SendMail } from "./pages/AuthPages/MailPages/SendMail";
import { CreatePassword } from "./pages/AuthPages/PasswordPage/CreatePassword";
import { RecoverPasswordChangedPassword } from "./pages/AuthPages/ResetPasswordPages/PasswordChanged";
import { useAuthContext } from "./hooks/authContext";

export function Routes() {
    const Protected = () => {
        const currentUser = useAuthContext();

        if(!currentUser) {
            return <Navigate to='/auth/login' />
        }

        return <Outlet />;
    }

    return (
        createBrowserRouter(
            createRoutesFromElements(
                <Route path="/">
                    {/* Area Publica */}
                    <Route element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="funcionalidades" element={<FeaturePage />} />
                        <Route path="precos" element={<PricePage />} />
                    </Route>

                    <Route element={<Protected />}>
                    </Route>
                
                    <Route element={<Auth />}>
                        {/* Login */}
                        <Route path="auth/login/select-account" element={<LoginAccountSelection />} />
                        <Route path="auth/login" element={<Login />} />
        
                        {/* Registro */}
                        <Route path="auth/register/select-account" element={<RegisterAccountSelection />} />
                        <Route path="auth/register/email-verification" element={<MailVerification isFromPath={'register'} />} />
                        <Route path="auth/register/account-info" element={<RegisterAccountInformation />} />
                        <Route path="auth/register/create-password" element={<CreatePassword isFromPath="register" />} />
                        <Route path="auth/register/email-send" element={<SendMail isFromPath={'register'} />} />
                        <Route path="auth/register/account-created" element={<RegisterAccountCreated />} />
                       
                        {/* Recuperação de senha */}
                        <Route path="recover-password/email-verification" element={<MailVerification isFromPath={'recover-password'} />} />
                        <Route path="recover-password/email-send" element={<SendMail isFromPath={'recover-password'} />} />
        
                        <Route path="recover-password/create-password" element={<CreatePassword isFromPath="recover-password"/>} />
                        <Route path="recover-password/password-changed" element={<RecoverPasswordChangedPassword />} />
                    </Route>           
                </Route>
            )
        )
    )
}