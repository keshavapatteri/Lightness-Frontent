import React from 'react'
import UserHeader from '../components/user/userHeader'
import { Outlet } from 'react-router-dom'
import UserFooter from '../components/user/userFooter'

const RootLayout = () => {
  return (
    <div>
      <UserHeader/>
      <div className='min-h-96'><Outlet/></div>
   <UserFooter/>
    </div>
  )
}

export default RootLayout
