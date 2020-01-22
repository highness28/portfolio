import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import styled from '@emotion/styled'
import FooterBackground from '../assets/images/mountain.jpg'

const FooterContainer = styled(Container)({
    backgroundAttachment: 'fixed',
    backgroundImage: `url('${FooterBackground}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    display: 'flex',
    height: 'calc(100vh)',
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
            Last updated this website on January 22, 2020 5:30 PM GMT+8 
        </LeftContent>
        <RightContent>
            &copy; All rights reserve to German Manalili
        </RightContent>
    </FooterContainer>
)

export default Footer