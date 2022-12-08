import React from 'react';
//import {FaBars, HiHome, MdDoneOutline, FiLogOut, GrOverview} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/overview",
            name:"Overview",
            //icon:<GrOverview/>
        },
    
        {
            path:"/projects",
            name:"Projects",
            icon:""
        },
        {
            path:"/completedtasks",
            name:"Completed Tasks",
            //icon:<MdDoneOutline/>
        },
        {
            path:"/About",
            name:"About",
            //icon:<HiHome/>
        },
        {
            path:"/logout",
            name:"Logout",
            //icon:<FiLogOut/>
        },
    ]
    return (
        <div className = "container">
            <div className = "sidebar">
                <div className = "top_section">
                    <h1 className = "logo">Logo</h1>
                    <div className = "bars">

                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                   </NavLink>

                        
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
    };
                
                    

export default Sidebar;