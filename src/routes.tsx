import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./layouts/App";
import { HomePage } from "./pages/HomePage";
import { PricePage } from "./pages/PricePage";
import { FeaturePage } from "./pages/FeaturePage";


export const routes = createBrowserRouter(
  createRoutesFromElements(
    //Area Publica
    <Route element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="precos" element={<PricePage />} />
      <Route path="funcionalidades" element={<FeaturePage />} />
    </Route>

    //Area Autenticada
  )
)