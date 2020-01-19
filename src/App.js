import React from 'react'
import Container from './components/Container'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import Content from './screens/Content'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content />
      <Footer />
    </Container>
  );
}

export default App