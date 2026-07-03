import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { SimulationFormsPage } from "./pages/SimulationFormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <SimulationFormsPage /> },
      { path: "resultado", element: <h1>Resultado da Simulação</h1> },
      { path: "historico", element: <h1>Histórico de Simulações</h1> },
      { path: "*", element: <h1>Página não encontrada (404)</h1> },
    ],
  },
]);
