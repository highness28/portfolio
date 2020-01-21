import React from 'react'
import HeaderBackground from '../assets/images/ger.jpg'
import Parallax from '../components/Parallax'
import Flex from '../components/Flex'
import styled from '@emotion/styled'

const HeaderContainer = styled(Flex)({
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
})

const QuoteContainer = styled.span({
    fontFamily: 'Arial',
    fontSize: 32,
    fontWeight: 'bold',
})

const Home = () => (
    <Parallax
        background={HeaderBackground}
    >
        <HeaderContainer>
            <QuoteContainer style={{ color: 'white' }}>
                {'success = { workHard(x) for x in life x != finish }'}
            </QuoteContainer>
        </HeaderContainer>
    </Parallax>
)

export default Home