import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import { NavLink } from "react-router-dom"

const NavbarContainer = styled(Container)({
    height: 60,
    backgroundColor: '#000',
    display: 'flex',
    position: 'fixed',
    top: 0,
    width: '100%',
    alignItems: 'center'
})

const NavTitle = styled.span({
    padding: '0 30px',
    color: '#fff',
    fontFamily: 'Tahoma',
    fontSize: 24,
    fontWeight: 'bold',
    width: 40,
})

const NavMenuContainer = styled.div({
    alignSelf: 'center',
    height: '100%',
    display: 'flex',
    flex: 1,
    marginRight: 70,
    '::hover': {
        color: 'green'
    },
    justifyContent: 'center'
})

const NavItem = styled(NavLink)(({ isActive }) => ({
    alignItems: 'center',
    backgroundColor: isActive ? '#f53b57' : 'inherit',
    color: '#fff',
    display: 'flex',
    fontFamily: 'Arial',
    height: '100%',
    justifyContent: 'center',
    outline: 'none',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '0 10px',
    width: 100,
    ':hover': {
        backgroundColor: '#f53b57',
        cursor: 'pointer'
    },
    '&.active': {
        backgroundColor: '#f53b57'
    }
}))

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavTitle>
                Novus
            </NavTitle>
            <NavMenuContainer>
                <NavItem to='/' exact>
                    HOME
                </NavItem>
                <NavItem to='/about' exact>
                    ABOUT
                </NavItem>
                <NavItem to='/projects' exact>
                    PROJECTS
                </NavItem>
                <NavItem to='/team' exact>
                    TEAM
                </NavItem>
                <NavItem to='/contact' exact>
                    CONTACT
                </NavItem>
            </NavMenuContainer>
        </NavbarContainer>
    )
}

export default Navbar