import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
import { AccountSelection } from "./pages/AuthPages/Login/AccountSelection";
import { RegisterAccountSelection } from "./pages/AuthPages/Register/AccountSelection";
import { Auth } from "./components/Auth";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Area Publica */}
      <Route element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="precos" element={<PricePage />} />
        <Route path="funcionalidades" element={<FeaturePage />} />
      </Route>
  
      <Route element={<Auth />}>
        <Route path="auth/login/select-account" element={<AccountSelection />} />
        <Route path="auth/register/select-account" element={<RegisterAccountSelection />} />
      </Route>
    </Route>
  )
)