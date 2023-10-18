import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";


export const routes = createBrowserRouter([
  //Area publica
  {
    path: "/",
    element: <App />
  },

  //Area Restrita
  {
    path: "/d",
    element: ""
  }
])


