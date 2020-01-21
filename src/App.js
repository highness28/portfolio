import React from 'react'
import Container from './components/Container'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import Content from './screens/Content'
import {
  BrowserView,
  MobileView,
  // isBrowser,
  // isMobile
} from "react-device-detect"

const App = () => {
  return (
    <Container>
      <BrowserView>
        <Navbar />
        <Content />
        <Footer />
      </BrowserView>
      <MobileView>
        <h1>I have not yet implemented mobile support for this site please use a computer or change to desktop mode.</h1>
      </MobileView>
    </Container>
  );
}

export default App