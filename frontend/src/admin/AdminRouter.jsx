import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import { Dashboard } from './pages/Dashboard'
import { AuthGuard } from '../services/AuthGuard';
import Error from '../utils/Error';
import Edit from './pages/Edit';
import Stats from './pages/Stats';
import { Sidebar } from './compenents/sidebar/Sidebar';
import Users from './pages/Users';

export const AdminRouter = () => {
  return (
    <div>
      <AuthGuard>
        <Sidebar />
      </AuthGuard>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/action/edit/:id" element={<Edit />} />
        <Route path="/statistiques" element={<Stats />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default AdminRouter;