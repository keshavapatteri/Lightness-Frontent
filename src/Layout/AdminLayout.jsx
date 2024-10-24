import React from 'react'
import AdminHeader from '../Components/Admin/AdminHeader'
import AdminFooter from '../Components/Admin/AdminFooter'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <div className='min-h-96'><Outlet/></div>
      <AdminFooter/>
    </div>
  )
}

export default AdminLayout
