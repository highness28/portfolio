import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import HeaderBackground from '../assets/images/ger.jpg'
import Parallax from '../components/Parallax'
import Flex from '../components/Flex'

const ContentContainer = styled(Container)({
    minHeight: 'calc(100vh - 60px)',
    flex: 1,
    marginTop: 60
})

const AvatarContainer = styled(Flex)({
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
})

const Content = () => (
    <ContentContainer>
        <Parallax
            background={HeaderBackground}
        // height='calc(100vh - 300px)'
        >
            <AvatarContainer>
                <p>
                    <h1 style={{ color: 'white' }}>
                        {'<LOLO MO CODES>'}
                    </h1>
                </p>
            </AvatarContainer>
        </Parallax>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </ContentContainer>
)

export default Content