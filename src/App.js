import React from 'react'
import './App.css'
import avatar from './assets/images/avatar.jpg'
import styled from '@emotion/styled'

const AvatarContianer = styled.div({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 210
})

const Avatar = styled.div({
  backgroundImage: `url(${avatar})`,
  backgroundSize: 'cover',
  borderRadius: 200,
  height: 400,
  width: 400
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AvatarContianer>
          <Avatar />
        </AvatarContianer>
        <p>THIS IS STILL UNDER DEVELOPMENT BY ME</p>
        January 19, 2020 1:25 AM GMT+8
      </header>
    </div>
  );
}

export default App