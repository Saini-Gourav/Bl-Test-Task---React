import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopNavbar = () => {
  return (
    <div style={{display:'flex', justifyContent:"space-between"}}>
    <div className="top-navbar">
      <h2>Covid-19</h2>
      <p>Live Tracker Dashboard</p>
    </div>
    <div style={{display:'flex',alignContent:'center', gap:'15px'}}>
      <input style={{borderRadius:"5px", height:"30px", width:"",border:'0.5px solid black'}} type="text" placeholder='Search......'/>
      <IoIosLogOut size={25}/>
      <IoMdNotificationsOutline size={25}/>

    </div>
    </div>
  )
}

export default TopNavbar
