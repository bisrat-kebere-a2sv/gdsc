import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Signup from "./components/Signup.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import ProductPage from "./components/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:name",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <div>This page is not Defined in main.jsx router</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
