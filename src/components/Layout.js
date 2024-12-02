import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import '../App.css';
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa";
import { RiAdminLine, RiAdminFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

export default function Layout() {
    const iconStyle = {
        fontsize: '30px',
        // color:'black'
        margin:'10px'
    }
  return (
      <>
          <div className='navbar'>
              <div><NavLink className="nav-link" to="/"><IoHomeOutline  className='icon-style' /><p>Home</p></NavLink></div>
              <div><NavLink className="nav-link" to='/profile/1a2b3c4d5f6e'><FaRegUser className='icon-style'/>Profile</NavLink></div>
              <div><NavLink className="nav-link" to="/admin-login"><RiAdminLine className='icon-style'/>Admin</NavLink></div>
              {/* <div><NavLink className="nav-link" to="/logout"><TbLogout className='icon-style'/>Logout</NavLink></div> */}
          </div>
          <Outlet/>
      </>
  )
}
