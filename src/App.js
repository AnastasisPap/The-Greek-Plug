import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './default.scss';
import { checkUserSession } from './redux/User/user.actions';

// components
import AdminToolbar from './components/AdminToolbar';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Order from './pages/Order';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar />

      <Routes>
        <Route exact path="/" element={
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        }
        />
      {/*
        <Route exact path="/search" element={
          <MainLayout>
            <Search />
          </MainLayout>
        } />
        <Route path="/search/:filterType" element={
          <MainLayout>
            <Search />
          </MainLayout>
        } />
        <Route path="/product/:productID" element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        } />
        <Route path="/cart" element={
          <MainLayout>
            <Cart />
          </MainLayout>
        } />
        <Route path="/payment" element={
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
        } />
        <Route path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          } />
        <Route path="/dashboard" element={
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        } />
        <Route path="/order/:orderID" element={
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        } />
        <Route path="/admin" element={
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        } />
      */}
      </Routes>
    </div>
  );
}

export default App;
