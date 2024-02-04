import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Store from "./pages/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersistentDrawerLeft />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/store", element: <Store /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
