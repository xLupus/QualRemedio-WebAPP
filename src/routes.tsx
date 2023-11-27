import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";
import { AccountSelectionPage } from "./pages/AuthPages/Login/AccountSelectionPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Area Publica */}
      <Route element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="precos" element={<PricePage />} />
        <Route path="funcionalidades" element={<FeaturePage />} />
      </Route>
  
      <Route path="auth/login/select-account" element={<AccountSelectionPage />} />
    </Route>
  )
)