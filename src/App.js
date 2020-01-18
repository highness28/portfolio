import React from 'react'
import './App.css'
import Avatar from './components/Avatar'
import Card from './components/Card'
import styled from '@emotion/styled'

const Flex = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Container = styled.div({
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#696969'
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Flex>
            <Avatar size='sm' />
          </Flex>
          <Flex>
            <h4 style={{ marginBlockStart: '0.5em', marginBlockEnd: '0.5em' }}>German Manalili</h4>
          </Flex>

          <Flex style={{ margin: '15px 0' }}>
            <Container>
              Full Stack Web Developer
            </Container>
            <Container>
              Invento Software Solutions, Inc.
            </Container>
          </Flex>

          <Flex style={{ margin: '15px 0' }}>
            <Container>
              Technical Manager
            </Container>
            <Container>
              Novus Software Solutions Inc.
            </Container>
          </Flex>

          <Flex style={{ margin: '15px 0' }}>
            <Container>
              <a href='https://www.linkedin.com/in/german-manalili-68ba6b133' style={{ textDecoration: 'none', color: 'skyBlue' }}>Linked Profile</a>
            </Container>
            <Container>
              <a href='https://www.facebook.com/Highness28' style={{ textDecoration: 'none', color: 'skyBlue' }}>Facebook Profile</a>
            </Container>  
          </Flex>
        </Card>
      </header>
    </div>
  );
}

export default App