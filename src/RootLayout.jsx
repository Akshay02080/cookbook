import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Navbarh from './components/Navbarh'

function RootLayout(props) {
    const [datafromnavbar,setdatafromnavbar]=useState("");
    let getcontentfromnavbar=(content)=>{
        setdatafromnavbar(content)     
        props.getcontentfromrootlayout(content)
    }


  return (
    <div>
        <Navbarh getcontentfromnavbar={getcontentfromnavbar}/>
        <Outlet/>
    </div>
  )
}

export default RootLayout