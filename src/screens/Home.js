import React from 'react'
import HeaderBackground from '../assets/images/ger.jpg'
import Parallax from '../components/Parallax'
import Flex from '../components/Flex'
import styled from '@emotion/styled'
import '../index.css'

const HeaderContainer = styled(Flex)({
    animationName: 'fadeIn',
    animationDuration: '1s',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    height: '100%',
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
            <QuoteContainer>
                {'success = { workHard(x) for x in life x != finish }'}
            </QuoteContainer>
        </HeaderContainer>
    </Parallax>
)

export default Home