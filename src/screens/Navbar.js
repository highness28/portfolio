import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'

const NavbarContainer = styled(Container)({
    height: 60,
    backgroundColor: 'black',
    display: 'flex',
    position: 'fixed',
    top: 0,
    width: '100%'
})

const NavTitle = styled.h3({
    padding: '0 30px',
    color: 'white',
    fontFamily: 'Tahoma'
})

const Navbar = () => (
    <NavbarContainer>
        <NavTitle>
            Novus
        </NavTitle>
    </NavbarContainer>
)

export default Navbar