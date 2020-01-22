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

const Team = () => (
    <div style={{ padding: 25 }}>
        <p>German Manalili - Project Manager</p>
        <p>Wil Costillas - Senior Backend Developer</p>
        <p>Nahid Abdulmalik - Senior Frontend Developer</p>
        <p>Ronald Gipa - Junior Frontend Developer</p>
        <p>Joyce Mauricio - Junior Ftonend Developer</p>
        <p>Jan Myckel Perez - Junior Frontend Developer</p>
        <p>Jay Maico - Junior Frontend Developer</p>
        <p>Gautama Gonzales - Designer</p>
    </div>
)

const Content = () => (
    <ContentContainer>
        <Switch>
            <Route path="/about" component={Something} />
            <Route path="/projects" component={Something} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Something} />
            <Route path="/" component={Home} />
        </Switch>
    </ContentContainer>
)

export default Content