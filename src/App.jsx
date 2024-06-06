import { React } from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import SignUp from "./components/SignUp";

import RootLayouts from "./layouts/rootlayouts";
import Logout from "./components/SignOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route index path="SignUp" element={<SignUp />} />
      <Route path="SignOut" element={<Logout/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
