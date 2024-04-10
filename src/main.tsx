import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main.tsx';
import { Navbar } from './components/widgets/Navbar.tsx';
import { Header } from './components/widgets/Header.tsx';
import { Footer } from './components/widgets/Footer.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <Header />
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </NextUIProvider >
  </React.StrictMode>,
)
