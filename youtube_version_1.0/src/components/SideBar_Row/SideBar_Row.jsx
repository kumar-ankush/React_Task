import React from 'react';
import './SideBar_Row.css'
function SideBar_Row ({selected,Icon,title})  {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h6 className="sidebarRow__title">{title}</h6>
        </div>
    );
}

export default SideBar_Row;
