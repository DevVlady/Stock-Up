import React from 'react'
import "./Sidebar.css"
import {SidebarData} from './SidebarData';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
            {SidebarData.map((val,key)=> {
                return  (
                <li key={key}></li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;
