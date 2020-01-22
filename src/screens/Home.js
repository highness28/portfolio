import React from 'react'
import HeaderBackground from '../assets/images/header-animation.gif'
import Parallax from '../components/Parallax'
import Flex from '../components/Flex'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { fadeIn } from 'react-animations'
import LogoImage from '../assets/images/logo.png'

const fadeInAnimation = keyframes`${fadeIn}`;

const HeaderContainer = styled(Flex)({
    animation: `1s ${fadeInAnimation}`,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'column',
    height: '100%'
})

const Logo = styled.img({
    display: 'flex',
    height: 200,
    width: 220
})

const QuoteContainer = styled.span({
    fontFamily: 'Arial',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
})

const Home = ({ in: inProp }) => (
    <Parallax background={HeaderBackground} >
        <HeaderContainer>
            <Logo alt='logo' src={LogoImage} />
            <QuoteContainer>
                {'success = { workHard(x) for x in life x != finish }'}
            </QuoteContainer>
        </HeaderContainer>
    </Parallax>
)

export default Home