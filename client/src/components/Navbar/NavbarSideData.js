import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import Logout from '../Logout/Logout.jsx';
// import { Button } from 'reactstrap';



export const SidebarData = [
    {
        title: "Home",
        path: '/dashboard',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Graphs",
        path: '/stocks',
        icon: <AiIcons.AiOutlineBarChart/>,
        cName: 'nav-text'
    },
    {
        title: "News",
        path: '/',
        icon: <FaIcons.FaRegNewspaper/>,
        cName: 'nav-text'
    },
    {
        title: "Contact Us",
        path: '/',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        // title: "Logout",
        // path: '/logout',
        icon: <FaIcons.FaPowerOff/>,
        cName: 'nav-text'
    },
]