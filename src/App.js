import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Iconfont />
        <GlobalStyle />
      </Fragment>
    )
  }
}



export default App;
