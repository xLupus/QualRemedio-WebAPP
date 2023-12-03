import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
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