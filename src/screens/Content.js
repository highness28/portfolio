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


const Something = ({ children }) => (
    <div>
        TESTING
    </div>
)

const Content = () => (
    <ContentContainer>
        <Switch>
            <Route path="/about" component={Something} />
            <Route path="/projects" component={Something} />
            <Route path="/contact" component={Something} />
            <Route path="/" component={Home} />
        </Switch>
    </ContentContainer>
)

export default Content