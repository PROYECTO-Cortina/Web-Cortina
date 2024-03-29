import './Layout.css'

import React from "react";

import { Body } from './Body/Body'
import { Topbar } from './Topbar/Topbar'
import { Sidebar } from './Sidebar/Sidebar'
import Top from "./Topbar/Top";
import SideNavBar from './Sidebar/SideNavBar';

export const Layout = () => {
    return (
        <div className="ly">
            <Top/>
            <Body/>
            <SideNavBar/>       
        </div>
    );
}
