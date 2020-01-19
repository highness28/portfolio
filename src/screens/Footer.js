import React from 'react'
import Flex from '../components/Flex'
import Card from '../components/Card'
import styled from '@emotion/styled'

const Container = styled(Card)({
    display: 'flex',
    background: 'black',
    bottom: 0,
    borderRadius: 0,
    color: '#a4a4a4',
    height: 25,
    padding: 0,
    position: 'fixed',
    width: '100%'
})

const LeftContent = styled(Flex)({
    margin: '0 10px'
})

const RightContent = styled(Flex)({
    margin: '0 10px',
    flexDirection: 'row-reverse'
})

const Footer = () => (
    <Container>
        <LeftContent>
            Started developing this website on January 19, 2020 1:25 AM GMT+8 | 
            Last updated this website on January 19, 2020 09:31 PM GMT+8 
            (Hours worked 4hrs)
        </LeftContent>
        <RightContent>
            &copy; All rights reserve to German Manalili
        </RightContent>
    </Container>
)

export default Footer