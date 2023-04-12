import React, { useState } from 'react';
import { CiSettings, CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { RiUserReceived2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import '../stylesheets/Sidebar.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<RxDashboard/>
        },
        {
            path:"/products",
            name:"Products",
            icon:<GoPackage/>
        },
        {
            path:"/suppliers",
            name:"Suppliers",
            icon:<CiDeliveryTruck/>
        },
        {
            path:"/receivers",
            name:"Receivers",
            icon:<RiUserReceived2Line/>
        },
        {
            path:"/report",
            name:"Report",
            icon:<AiOutlineBarChart/>
        },
        {
            path:"/usercontrol",
            name:"User Control",
            icon:<CiSettings/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;