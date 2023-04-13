import React from 'react';
import './App.css';

import Header from './components/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Report from './pages/Report.jsx';
import Receivers from './pages/Receivers.jsx';
import Suppliers from './pages/Suppliers.jsx';
import Products from './pages/Products.jsx';
import UserControl from './pages/UserControl.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <Sidebar>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/receivers" element={<Receivers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/usercontrol" element={<UserControl />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;