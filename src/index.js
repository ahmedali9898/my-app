import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Error</h1>
  },

  {
    path: "Html",
    element: <Html/>,
    errorElement: <h1>Error</h1>
  },

  {
    path: "Css",
    element: <Css/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "Javascript",
    element: <Javascript/>,
    errorElement: <h1>Error</h1>
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
