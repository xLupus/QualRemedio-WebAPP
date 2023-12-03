import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
import { LoginAccountSelection } from "./pages/AuthPages/LoginPages/AccountSelection";
import { Login } from "./pages/AuthPages/LoginPages/Login";
import { RegisterAccountSelection } from "./pages/AuthPages/RegisterPages/AccountSelection";
import { Auth } from "./layouts/Auth";
import { MailVerification } from "./pages/AuthPages/RegisterPages/Mail/MailVerification";
import { SendMail } from "./pages/AuthPages/RegisterPages/Mail/SendMail";
import { RegisterAccountInformation } from "./pages/AuthPages/RegisterPages/AccountInformation";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            {/* Area Publica */}
            <Route element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="precos" element={<PricePage />} />
                <Route path="funcionalidades" element={<FeaturePage />} />
            </Route>
        
            <Route element={<Auth />}>
                <Route path="auth/login/select-account" element={<LoginAccountSelection />} />
                <Route path="auth/login" element={<Login />} />

                <Route path="auth/register/select-account" element={<RegisterAccountSelection />} />
                <Route path="auth/register/email/verification" element={<MailVerification />} />
                <Route path="auth/register/email/send" element={<SendMail />} />

                <Route path="auth/register/account-info" element={<RegisterAccountInformation />} />
            </Route>
        </Route>
    )
)