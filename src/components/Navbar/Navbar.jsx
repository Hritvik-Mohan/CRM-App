import { Flex, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <Wrap className='navbar' p='0.8rem' fontSize='2rem' color='white'>
                {/* <NavLink className="navlink" to={"/"}>Home</NavLink>
                <NavLink className="navlink" to={"/form"}>New customer</NavLink> */}
                <NavLink className="navlink" to={"/"}>CRM </NavLink>
            </Wrap>
        </div>
    )
}
