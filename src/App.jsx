import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './pages/home/Home.jsx';
import Products from './pages/products/Products.jsx';
import Product from './pages/product/Product.jsx';
import Checkout from './pages/checkout/Checkout.jsx';
import PaymentSuccess from './pages/payment-success/PaymentSuccess.jsx';

function App() {
  const key = import.meta.env.VITE_KEY;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/checkout', element: <Checkout /> },
        { path: '/payment-success', element: <PaymentSuccess /> },
        // { path: '/category/:slug', element: }
        { path: '/product/:slug', element: <Product /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
