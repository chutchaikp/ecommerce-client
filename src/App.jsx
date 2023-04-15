import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './pages/home/Home.jsx';
import Payment from './pages/payment/Payment.jsx';
import ProductPage from './pages/product-page/ProductPage.jsx';
import Category from './pages/category/Category.jsx';
import Checkout from './pages/checkout/Checkout.jsx';
import PaymentSuccess from './pages/payment-success/PaymentSuccess.jsx';
import PaymentComplete from './pages/payment-complete/PaymentComplete.jsx';

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
        // { path: '/products', element: <Products /> },
        // { path: '/checkout', element: <Checkout /> },
        { path: '/payment', element: <Payment /> },
        { path: '/payment-complete', element: <PaymentComplete /> },
        { path: '/category/:slug', element: <Category /> },
        { path: '/single-product/:slug', element: <ProductPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
