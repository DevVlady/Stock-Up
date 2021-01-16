import "./sidebar.css";
import React from "react";

 export const Sidebar = ({ width, height, children }) => {
    

    return(
        <div className="side-bar" style={{width: width, minHeigh: height}}>
            <React.FRagment>{children}</React.FRagment>
        </div>
    )
}
    
