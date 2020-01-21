import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'

const NavbarContainer = styled(Container)({
    height: 60,
    backgroundColor: '#000',
    display: 'flex',
    position: 'fixed',
    top: 0,
    width: '100%',
    alignItems: 'center'
})

const NavTitle = styled.h3({
    padding: '0 30px',
    color: '#fff',
    fontFamily: 'Tahoma',
    width: 40
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

const NavItem = styled.button(({ active }) => ({
    backgroundColor: 'inherit',
    border: 'none',
    color: '#fff',
    height: '100%',
    outline: 'none',
    fontWeight: 800,
    padding: '0 10px',
    ':hover': {
        backgroundColor: '#f53b57',
        cursor: 'pointer'
    }
}))

const Navbar = () => (
    <NavbarContainer>
        <NavTitle>
            Novus
        </NavTitle>
        <NavMenuContainer>
            <NavItem>HOME</NavItem> 
            <NavItem>ABOUT</NavItem>
            <NavItem>PROJECTS</NavItem>
            <NavItem>CONTACT</NavItem>
        </NavMenuContainer>
    </NavbarContainer>
)

export default Navbar