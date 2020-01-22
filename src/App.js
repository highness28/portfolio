import React from 'react'
import Container from './components/Container'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import Content from './screens/Content'
import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserView, MobileView } from "react-device-detect"

const App = () => {
  return (
    <Router basename='/portfolio'>
      <Container>
        <BrowserView>
          <Navbar />
          <Content />
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
          <Footer />
        </BrowserView>
        <MobileView>
          <h1>I have not yet implemented mobile support for this site please use a computer or change to desktop mode.</h1>
        </MobileView>
      </Container>
    </Router>
  );
}

export default App