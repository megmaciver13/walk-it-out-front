import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
   render() {
        return(
            <Navbar brand='Walk It Out' className="nav" right>
                <NavItem href='/'>All Dogs</NavItem>
                <NavItem href='/signup'>Sign Up</NavItem>
                <NavItem href='/login'>Log In</NavItem>
            </Navbar>
        )
    }
}

export default NavBar