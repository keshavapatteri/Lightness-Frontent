import React from 'react'
import CustmerHeader from '../Components/Custmer/CustmerHeader'
import CustmerFooter from '../Components/Custmer/CustmerFooter'
import { Outlet } from 'react-router-dom'

const CustmerLayout = () => {
  return (
    <div>
       <CustmerHeader/>
      <div className='min-h-96'><Outlet/></div>
   <CustmerFooter/>
    </div>
  )
}

export default CustmerLayout
