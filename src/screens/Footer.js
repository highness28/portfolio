import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import styled from '@emotion/styled'

const FooterContainer = styled(Container)({
    display: 'flex',
    background: '#333',
    borderRadius: 0,
    color: '#a4a4a4',
    height: 400,
    padding: 0,
    width: '100%'
})

const LeftContent = styled(Flex)({
    margin: '0 10px',
    flexDirection: 'column-reverse'
})

const RightContent = styled(Flex)({
    margin: '0 10px',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
})

const Footer = () => (
    <FooterContainer>
        <LeftContent>
            Started developing this website on January 19, 2020 1:25 AM GMT+8 | 
            Last updated this website on January 19, 2020 09:31 PM GMT+8 
        </LeftContent>
        <RightContent>
            &copy; All rights reserve to German Manalili
        </RightContent>
    </FooterContainer>
)

export default Footer