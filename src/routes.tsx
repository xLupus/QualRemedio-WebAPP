import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/AppPages/HomePage";
import { PricePage } from "./pages/AppPages/PricePage";
import { FeaturePage } from "./pages/AppPages/FeaturePage";
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
import { useCurrentUserContext } from "./hooks/CurrentUserContext";
import { ProfileAccountConfiguration } from "./pages/AppPages/ProfilePages/AccountConfig";
import { Profile } from "./layouts/Profile";
import { Index } from "./layouts/Index";
import { ProfileAccountSecurity } from "./pages/AppPages/ProfilePages/Security";
import { ProfilePlans } from "./pages/AppPages/ProfilePages/Plans";
import { ProfileSystem } from "./pages/AppPages/ProfilePages/System";
import { LoginProviderLayout } from "./layouts/providers/Auth/Login";
import { RegisterProviderLayout } from "./layouts/providers/Auth/Register";
import { MailVerified } from "./pages/AuthPages/MailPages/MailVerified";
import { CreateBondPage } from "./pages/AppPages/BondPages/CreateBondPage";
import { ListBondPage } from "./pages/AppPages/BondPages/ListBondPage";

export function Routes() {
    const currentUser = useCurrentUserContext();
    
    const PreventBackHistory = () => {
        if(currentUser) {
            return <Navigate to='/' replace={true} />
        }

        return <Outlet />;
    }

    const Protected = () => {
        if(!currentUser) {
            return <Navigate to='/auth/login/select-account' replace={true} />
        }

        return <Outlet />;
    }

    return (
        createBrowserRouter(
            createRoutesFromElements(
                <Route path="/">
                    {/* Area Publica */}
                    <Route element={<Index />}>
                        <Route index element={<HomePage />} />
                        <Route path="functionalities" element={<FeaturePage />} />
                        <Route path="prices" element={<PricePage />} />
                    </Route>

                    <Route element={<PreventBackHistory />}>
                        <Route element={<Auth />}>
                            {/* Login */}
                            <Route element={<LoginProviderLayout />}>
                                <Route path="auth/login/select-account" element={<LoginAccountSelection />} />
                                <Route path="auth/login" element={<Login />} />
                            </Route>

                            <Route element={<RegisterProviderLayout />}>
                                {/* Registro */}
                                <Route path="auth/register/select-account" element={<RegisterAccountSelection />} />
                                <Route path="auth/register/email-verification" element={<MailVerification isFromPath={'register'} />} />
                                <Route path="auth/register/account-info" element={<RegisterAccountInformation />} />
                                <Route path="auth/register/create-password" element={<CreatePassword isFromPath="register" />} />
                                <Route path="auth/register/email-send" element={<SendMail isFromPath={'register'} />} />
                                <Route path="auth/register/account-created" element={<RegisterAccountCreated />} />

                                <Route path="users/mail/verify/:emailToken" element={<MailVerified />} />
                                
                                {/* Recuperação de senha */}
                                <Route path="recover-password/email-verification" element={<MailVerification isFromPath={'recover-password'} />} />
                                <Route path="recover-password/email-send" element={<SendMail isFromPath={'recover-password'} />} />
                        
                                <Route path="recover-password/create-password" element={<CreatePassword isFromPath="recover-password"/>} />
                                <Route path="recover-password/password-changed" element={<RecoverPasswordChangedPassword />} />
                            </Route>  
                        </Route>   
                    </Route>
                            
                    <Route element={<App />}>
                        <Route element={<Profile />}>
                            <Route path="/profile/account-config" element={<ProfileAccountConfiguration />} />
                            <Route path="/profile/security" element={<ProfileAccountSecurity />} />
                            <Route path="/profile/system" element={<ProfileSystem />} />
                            <Route path="/profile/plans" element={<ProfilePlans />} />
                        </Route>
                        
                        <Route element={<Protected />}>
                            <Route path="/users/bond/create" element={<CreateBondPage />} />
                            <Route path="/users/bond/all" element={<ListBondPage actions query={{ auth_user: Number(currentUser?.user_id) }} />} />
                        </Route>
                    </Route>
                </Route>
            )
        )
    )
}
