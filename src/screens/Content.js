import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import Home from '../screens/Home'

import {
    Switch,
    Route
} from "react-router-dom";


const ContentContainer = styled(Container)({
    minHeight: 'calc(100vh - 60px)',
    flex: 1,
    marginTop: 60
})

const Content = () => (
    <ContentContainer>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </ContentContainer>
)

export default Content