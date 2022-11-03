import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Create from './Create';
import Update from './Update';
import Read from './Read';
import Nav from './Nav';


function Routers() {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path='/Read' element={<Read/>}/>
            <Route path='/Update' element={<Update/>}/>
            <Route exact path='/' element={<Create/>}/>
        </Routes>

        {/* <Create/> */}
        {/* <Read/> */}

    </div>
  )
}

export default Routers