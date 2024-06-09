// App.jsx
import React from 'react';
import {
  createBrowserRouter,
  Routes,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import About from './pages/About';

import SignUp from './components/SignUp';
import Logout from './components/SignOut';

import RootLayouts from './layouts/rootlayouts';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/Pro_Routing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Shop/:id" element={<ProductDetails />} />
      {/* Protected route for cart, only accessible for logged-in users */}
      <Route path="cart" element={<ProtectedRoute roles={['user']}><Cart /></ProtectedRoute>} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="SignOut" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    // Provide auth context to the entire app
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
