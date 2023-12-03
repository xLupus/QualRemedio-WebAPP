import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
<<<<<<< HEAD
import { ListConsultationPage } from "./pages/Consultation/ListConsultationPage";
import { CreateConsultationPage } from "./pages/Consultation/CreateConsultationPage";
import { ShowConsultationDetailsPage } from "./pages/Consultation/ShowConsultationDetailsPage";
import { UpdateConsultationPage } from "./pages/Consultation/UpdateConsultationPage";
import { CreatePrescriptionPage } from "./pages/Prescription/CreatePrescriptionPage";
import { UpdatePrescriptionPage } from "./pages/Prescription/UpdatePrescriptionPage";
import { ShowProfileDetails } from "./pages/Profile/ShowProfileDetails";
import { UpdateProfileData } from "./pages/Profile/UpdateProfileData";
import { ChangePassword } from "./pages/Profile/ChangePassword";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="precos" element={<PricePage />} />
        <Route path="funcionalidades" element={<FeaturePage />} />
      </Route>

      <Route path="/d">
        <Route path="perfil" element={<ShowProfileDetails />} />
        <Route path="perfil/atualizar" element={<UpdateProfileData />} />
        <Route path="perfil/atualizar/senha" element={<ChangePassword />} />

        <Route path="consultas" element={<ListConsultationPage actions query={{ auth_user: 14, bond_id: 1 }} />} />
        <Route path="consultas/criar" element={<CreateConsultationPage />} />
        <Route path="consultas/:consultation_id" element={<ShowConsultationDetailsPage />} />
        <Route path="consultas/:consultation_id/editar" element={<UpdateConsultationPage />} />
        <Route path="consultas/:consultation_id/prescricao/criar" element={<CreatePrescriptionPage />} />
        <Route path="consultas/:consultation_id/prescricao/:prescription_id/atualizar" element={<UpdatePrescriptionPage />} />
      </Route>
    </>
  )
)
=======
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
                        <Route path="precos" element={<PricePage />} />
                    </Route>

                    <Route element={<Protected />}>
                        <Route path="funcionalidades" element={<FeaturePage />} />
                    </Route>
                
                    <Route element={<Auth />}>
                        {/* Login */}
                        <Route path="auth/login/select-account" element={<LoginAccountSelection />} />
                        <Route path="auth/login" element={<Login />} />
        
                        {/* Registro */}
                        <Route path="auth/register/select-account" element={<RegisterAccountSelection />} />
                        <Route path="auth/register/email-verification" element={<MailVerification isFromPath={'register'} />} />
                        <Route path="auth/register/email-send" element={<SendMail isFromPath={'register'} />} />
                        <Route path="auth/register/account-info" element={<RegisterAccountInformation />} />
                        <Route path="auth/register/create-password" element={<CreatePassword isFromPath="register" />} />
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
>>>>>>> feature/register
