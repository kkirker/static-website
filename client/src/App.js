import React, { Component } from "react";
import styled from '@emotion/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Body from "./components/bodyComponents/Body"

const Content = styled('div')({
  marginTop: 0
})

class App extends Component {
  render() {
    return (
      <Router>
        <Content>
          <Navigation />
          <Body/>
          <Footer/>
      </Content>
      </Router>
    );
  }
}

export default App;


