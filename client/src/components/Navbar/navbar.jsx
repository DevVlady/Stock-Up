// import React from 'react';
import './navbar.css';
import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
// import Logout from '../Logout/Logout';
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);


    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="#" active>Link</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <Link>
                        <NavLink href="#">Logout</NavLink>
                    </Link>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;