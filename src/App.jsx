import { useEffect, useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

function App() {
  const [count, setCount] = useState(0)

//   return (
//     <>
//      <RouterProvider router={router}/>
//     </>
//   )
// }

useEffect(()=>{

},[])
return (
  <div>
<RouterProvider router={router}/>

  </div>
);
}

export default App
