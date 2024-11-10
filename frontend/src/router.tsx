import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import New from "./pages/New.tsx";
import Sale from "./pages/Sale.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-arrivals",
        element: <New />,
      },
      {
        path: "/on-sale",
        element: <Sale />,
      },
    ],
  },
]);

export default router;
