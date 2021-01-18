import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Graphs",
        path: '/',
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
        title: "Logout",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
]